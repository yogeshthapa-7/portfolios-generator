"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { PortfolioData, Project, Experience } from '../../lib/types';
import { generateId } from '../../lib/utils';

const defaultData: PortfolioData = {
    name: '',
    role: '',
    bio: '',
    email: '',
    location: '',
    social: {},
    skills: [],
    projects: [],
    experience: [],
    theme: 'brutalist',
};

type PortfolioContextType = {
    data: PortfolioData;
    updateData: (newData: Partial<PortfolioData>) => void;
    addProject: (project: Omit<Project, 'id'>) => void;
    updateProject: (id: string, project: Partial<Project>) => void;
    removeProject: (id: string) => void;
    addExperience: (experience: Omit<Experience, 'id'>) => void;
    updateExperience: (id: string, experience: Partial<Experience>) => void;
    removeExperience: (id: string) => void;
    addSkill: (skill: string) => void;
    removeSkill: (skill: string) => void;
    resetData: () => void;
};

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
    const [data, setData] = useState<PortfolioData>(defaultData);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem('portfolioData');
        if (saved) {
            try {
                setData(JSON.parse(saved));
            } catch (e) {
                console.error('Failed to parse saved data:', e);
            }
        }
        setIsLoaded(true);
    }, []);

    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem('portfolioData', JSON.stringify(data));
        }
    }, [data, isLoaded]);

    const updateData = (newData: Partial<PortfolioData>) => {
        setData(prev => ({ ...prev, ...newData }));
    };

    const addProject = (project: Omit<Project, 'id'>) => {
        const newProject = { ...project, id: generateId() };
        setData(prev => ({ ...prev, projects: [...prev.projects, newProject] }));
    };

    const updateProject = (id: string, project: Partial<Project>) => {
        setData(prev => ({
            ...prev,
            projects: prev.projects.map(p => p.id === id ? { ...p, ...project } : p)
        }));
    };

    const removeProject = (id: string) => {
        setData(prev => ({ ...prev, projects: prev.projects.filter(p => p.id !== id) }));
    };

    const addExperience = (experience: Omit<Experience, 'id'>) => {
        const newExperience = { ...experience, id: generateId() };
        setData(prev => ({ ...prev, experience: [...prev.experience, newExperience] }));
    };

    const updateExperience = (id: string, experience: Partial<Experience>) => {
        setData(prev => ({
            ...prev,
            experience: prev.experience.map(e => e.id === id ? { ...e, ...experience } : e)
        }));
    };

    const removeExperience = (id: string) => {
        setData(prev => ({ ...prev, experience: prev.experience.filter(e => e.id !== id) }));
    };

    const addSkill = (skill: string) => {
        if (!data.skills.includes(skill)) {
            setData(prev => ({ ...prev, skills: [...prev.skills, skill] }));
        }
    };

    const removeSkill = (skill: string) => {
        setData(prev => ({ ...prev, skills: prev.skills.filter(s => s !== skill) }));
    };

    const resetData = () => {
        setData(defaultData);
        localStorage.removeItem('portfolioData');
    };

    return (
        <PortfolioContext.Provider value={{
            data,
            updateData,
            addProject,
            updateProject,
            removeProject,
            addExperience,
            updateExperience,
            removeExperience,
            addSkill,
            removeSkill,
            resetData
        }}>
            {children}
        </PortfolioContext.Provider>
    );
}

export const usePortfolio = () => {
    const context = useContext(PortfolioContext);
    if (!context) throw new Error('usePortfolio must be used within PortfolioProvider');
    return context;
};