// src/pages/Admin.tsx
import { useState, useEffect } from "react";
import type { Project } from '../types/Project'; // Adjust path and import Technology

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'; // Fallback for VITE_API_URL

const Admin = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [editingProject, setEditingProject] = useState<Project | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        url: '',
        repository: ''
    });

    // --- Fetch Projects ---
    const fetchProjects = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`${API_BASE_URL}/projects`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data: Project[] = await response.json();
            // Optional: Convert date strings to Date objects if you need them as Date objects
            // data.forEach(p => {
            //     p.createDate = new Date(p.createDate);
            //     p.updateDate = new Date(p.updateDate);
            // });
            setProjects(data);
        } catch (err: any) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    // --- Handle Edit Button Click ---
    const handleEditClick = (project: Project) => {
        setEditingProject(project);
        setFormData({
            name: project.name,
            description: project.description || '', // Use || '' to ensure string for input
            url: project.url || '',
            repository: project.repository || ''
        });
    };

    // --- Handle Form Input Changes ---
    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // --- Handle Form Submission (Update Project) ---
    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!editingProject) return;

        setError(null);
        try {
            const response = await fetch(`${API_BASE_URL}/projects/${editingProject.uuid}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`HTTP error! status: ${response.status} - ${errorData.message || 'Unknown error'}`);
            }

            console.log('Project updated successfully!');
            await fetchProjects(); // Re-fetch projects to update the list
            setEditingProject(null); // Clear editing state
            setFormData({ name: '', description: '', url: '', repository: '' }); // Clear form

        } catch (err: any) {
            console.error('Error updating project:', err);
            setError(err);
        }
    };

    return (
        <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
            <h1>Panel de Administración de Proyectos</h1>

            {loading && <p>Cargando proyectos...</p>}
            {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}

            {/* Project List Section */}
            {!loading && !error && (
                <>
                    <h2>Lista de Proyectos</h2>
                    {projects.length > 0 ? (
                        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                            <thead>
                                <tr style={{ background: '#f2f2f2' }}>
                                    <th style={tableHeaderStyle}>ID</th> {/* Displaying ID */}
                                    <th style={tableHeaderStyle}>UUID</th> {/* Displaying UUID */}
                                    <th style={tableHeaderStyle}>Nombre</th>
                                    <th style={tableHeaderStyle}>Descripción</th>
                                    <th style={tableHeaderStyle}>URL</th>
                                    <th style={tableHeaderStyle}>Tecnologías</th> {/* New column for technologies */}
                                    <th style={tableHeaderStyle}>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {projects.map((project) => (
                                    <tr key={project.uuid} style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={tableCellStyle}>{project.id}</td>
                                        <td style={tableCellStyle}>{project.uuid}</td>
                                        <td style={tableCellStyle}>{project.name}</td>
                                        <td style={tableCellStyle}>{project.description?.substring(0, 50)}...</td>
                                        <td style={tableCellStyle}>
                                            <a href={project.url || '#'} target="_blank" rel="noopener noreferrer">
                                                {project.url ? 'Link' : '-'}
                                            </a>
                                        </td>
                                        <td style={tableCellStyle}>
                                            {project.technologies && project.technologies.length > 0
                                                ? project.technologies.map(tech => tech.name).join(', ')
                                                : '-'}
                                        </td>
                                        <td style={tableCellStyle}>
                                            <button onClick={() => handleEditClick(project)} style={buttonStyle}>Editar</button>
                                            {/* Add Delete button here if desired */}
                                            {/* <button onClick={() => handleDeleteClick(project.uuid)} style={{ ...buttonStyle, background: 'red' }}>Eliminar</button> */}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>No hay proyectos disponibles.</p>
                    )}
                </>
            )}

            {/* Project Edit Form */}
            {editingProject && (
                <div style={{ marginTop: '40px', borderTop: '1px solid #ccc', paddingTop: '20px' }}>
                    <h2>Editar Proyecto: {editingProject.name}</h2>
                    <form onSubmit={handleFormSubmit} style={formStyle}>
                        <div style={formGroupStyle}>
                            <label htmlFor="name" style={labelStyle}>Nombre:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleFormChange}
                                required
                                style={inputStyle}
                            />
                        </div>
                        <div style={formGroupStyle}>
                            <label htmlFor="description" style={labelStyle}>Descripción:</label>
                            <textarea
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleFormChange}
                                rows={4}
                                style={inputStyle}
                            />
                        </div>
                        <div style={formGroupStyle}>
                            <label htmlFor="url" style={labelStyle}>URL:</label>
                            <input
                                type="url"
                                id="url"
                                name="url"
                                value={formData.url}
                                onChange={handleFormChange}
                                style={inputStyle}
                            />
                        </div>
                        <div style={formGroupStyle}>
                            <label htmlFor="repository" style={labelStyle}>Repositorio:</label>
                            <input
                                type="url"
                                id="repository"
                                name="repository"
                                value={formData.repository}
                                onChange={handleFormChange}
                                style={inputStyle}
                            />
                        </div>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <button type="submit" style={{ ...buttonStyle, background: '#28a745' }}>Guardar Cambios</button>
                            <button type="button" onClick={() => setEditingProject(null)} style={{ ...buttonStyle, background: '#dc3545' }}>Cancelar</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

// Basic Inline Styles (for quick setup)
const tableHeaderStyle: React.CSSProperties = {
    padding: '10px',
    border: '1px solid #ddd',
    textAlign: 'left'
};

const tableCellStyle: React.CSSProperties = {
    padding: '10px',
    border: '1px solid #ddd',
    verticalAlign: 'top'
};

const buttonStyle: React.CSSProperties = {
    padding: '8px 15px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    background: '#007bff',
    color: 'white',
    fontSize: '14px'
};

const formStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    padding: '20px',
    border: '1px solid #eee',
    borderRadius: '8px',
    background: '#f9f9f9'
};

const formGroupStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column'
};

const labelStyle: React.CSSProperties = {
    marginBottom: '5px',
    fontWeight: 'bold'
};

const inputStyle: React.CSSProperties = {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px'
};

export default Admin;