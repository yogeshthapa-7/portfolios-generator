"use client";

import { usePortfolio } from "./context/PortfolioContext";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Badge } from "../components/ui/badge";
import { Plus, Trash2, Eye, Download, Sparkles, Github, Linkedin, Twitter, Globe, Briefcase, Award } from "lucide-react";
import { useState } from "react";
import { Project, Experience } from "../lib/types";

export default function Home() {
  const { 
    data, 
    updateData, 
    addProject, 
    removeProject,
    addExperience,
    removeExperience,
    addSkill,
    removeSkill,
    resetData
  } = usePortfolio();

  const [newSkill, setNewSkill] = useState("");
  const [projectForm, setProjectForm] = useState<Omit<Project, 'id'>>({
    title: "",
    description: "",
    tech: [],
    link: "",
    github: "",
    featured: false
  });
  const [experienceForm, setExperienceForm] = useState<Omit<Experience, 'id'>>({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    current: false,
    description: "",
    achievements: []
  });
  const [newTech, setNewTech] = useState("");
  const [newAchievement, setNewAchievement] = useState("");

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      addSkill(newSkill.trim());
      setNewSkill("");
    }
  };

  const handleAddProject = () => {
    if (projectForm.title && projectForm.description) {
      addProject(projectForm);
      setProjectForm({
        title: "",
        description: "",
        tech: [],
        link: "",
        github: "",
        featured: false
      });
    }
  };

  const handleAddExperience = () => {
    if (experienceForm.company && experienceForm.position) {
      addExperience(experienceForm);
      setExperienceForm({
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        current: false,
        description: "",
        achievements: []
      });
    }
  };

  const handleAddTech = () => {
    if (newTech.trim() && !projectForm.tech.includes(newTech.trim())) {
      setProjectForm(prev => ({ ...prev, tech: [...prev.tech, newTech.trim()] }));
      setNewTech("");
    }
  };

  const handleAddAchievement = () => {
    if (newAchievement.trim()) {
      setExperienceForm(prev => ({ ...prev, achievements: [...prev.achievements, newAchievement.trim()] }));
      setNewAchievement("");
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Brutalist Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"></div>
        <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>
      </div>

      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="mb-20 border-b-4 border-white pb-12">
          <div className="flex items-start justify-between mb-8">
            <div>
              <h1 className="text-7xl font-black mb-4 tracking-tight uppercase" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                Portfolio<br/>Generator
              </h1>
              <p className="text-2xl text-gray-400 font-light max-w-2xl" style={{ fontFamily: 'Helvetica Neue, sans-serif' }}>
                Craft your digital presence. Build something unforgettable.
              </p>
            </div>
            <div className="flex gap-4">
              <Button asChild variant="outline" size="lg" className="border-2 border-white hover:bg-blue-400 text-black transition-all">
                <a href="/preview">
                  <Eye className="mr-2" /> Preview
                </a>
              </Button>
              <Button onClick={resetData} variant="destructive" size="lg">
                Reset All
              </Button>
            </div>
          </div>
        </header>

        {/* Personal Information Section */}
        <section className="mb-20">
          <div className="border-l-8 border-yellow-400 pl-8 mb-10">
            <h2 className="text-5xl font-black mb-2 uppercase tracking-tight" style={{ fontFamily: 'Arial Black, sans-serif' }}>
              01. Identity
            </h2>
            <p className="text-gray-500 text-lg">Who are you?</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white/5 p-10 rounded-none border-2 border-white/10">
            <div className="space-y-3">
              <Label htmlFor="name" className="text-lg font-bold uppercase tracking-wider text-yellow-400">Full Name</Label>
              <Input 
                id="name"
                placeholder="Jane Doe" 
                value={data.name} 
                onChange={e => updateData({ name: e.target.value })}
                className="bg-black/50 border-2 border-white/20 text-white placeholder:text-gray-600 h-12 text-lg focus:border-yellow-400"
              />
            </div>
            
            <div className="space-y-3">
              <Label htmlFor="role" className="text-lg font-bold uppercase tracking-wider text-yellow-400">Professional Role</Label>
              <Input 
                id="role"
                placeholder="Full Stack Developer" 
                value={data.role} 
                onChange={e => updateData({ role: e.target.value })}
                className="bg-black/50 border-2 border-white/20 text-white placeholder:text-gray-600 h-12 text-lg focus:border-yellow-400"
              />
            </div>

            <div className="md:col-span-2 space-y-3">
              <Label htmlFor="bio" className="text-lg font-bold uppercase tracking-wider text-yellow-400">Bio</Label>
              <Textarea 
                id="bio"
                placeholder="Tell your story..." 
                value={data.bio} 
                onChange={e => updateData({ bio: e.target.value })}
                className="bg-black/50 border-2 border-white/20 text-white placeholder:text-gray-600 min-h-[120px] text-lg focus:border-yellow-400"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="email" className="text-lg font-bold uppercase tracking-wider text-yellow-400">Email</Label>
              <Input 
                id="email"
                type="email"
                placeholder="jane@example.com" 
                value={data.email} 
                onChange={e => updateData({ email: e.target.value })}
                className="bg-black/50 border-2 border-white/20 text-white placeholder:text-gray-600 h-12 text-lg focus:border-yellow-400"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="location" className="text-lg font-bold uppercase tracking-wider text-yellow-400">Location</Label>
              <Input 
                id="location"
                placeholder="San Francisco, CA" 
                value={data.location} 
                onChange={e => updateData({ location: e.target.value })}
                className="bg-black/50 border-2 border-white/20 text-white placeholder:text-gray-600 h-12 text-lg focus:border-yellow-400"
              />
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-10 bg-white/5 p-10 rounded-none border-2 border-white/10">
            <h3 className="text-2xl font-black mb-6 uppercase tracking-tight flex items-center gap-3">
              <Sparkles className="text-yellow-400" /> Social Presence
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Label className="flex items-center gap-2 text-base">
                  <Github className="w-4 h-4 text-yellow-400" /> GitHub
                </Label>
                <Input 
                  placeholder="https://github.com/username" 
                  value={data.social.github || ''} 
                  onChange={e => updateData({ social: { ...data.social, github: e.target.value }})}
                  className="bg-black/50 border-2 border-white/20 text-white placeholder:text-gray-600 h-11 focus:border-yellow-400"
                />
              </div>
              
              <div className="space-y-3">
                <Label className="flex items-center gap-2 text-base">
                  <Linkedin className="w-4 h-4 text-yellow-400" /> LinkedIn
                </Label>
                <Input 
                  placeholder="https://linkedin.com/in/username" 
                  value={data.social.linkedin || ''} 
                  onChange={e => updateData({ social: { ...data.social, linkedin: e.target.value }})}
                  className="bg-black/50 border-2 border-white/20 text-white placeholder:text-gray-600 h-11 focus:border-yellow-400"
                />
              </div>

              <div className="space-y-3">
                <Label className="flex items-center gap-2 text-base">
                  <Twitter className="w-4 h-4 text-yellow-400" /> Twitter
                </Label>
                <Input 
                  placeholder="https://twitter.com/username" 
                  value={data.social.twitter || ''} 
                  onChange={e => updateData({ social: { ...data.social, twitter: e.target.value }})}
                  className="bg-black/50 border-2 border-white/20 text-white placeholder:text-gray-600 h-11 focus:border-yellow-400"
                />
              </div>

              <div className="space-y-3">
                <Label className="flex items-center gap-2 text-base">
                  <Globe className="w-4 h-4 text-yellow-400" /> Website
                </Label>
                <Input 
                  placeholder="https://yourwebsite.com" 
                  value={data.social.website || ''} 
                  onChange={e => updateData({ social: { ...data.social, website: e.target.value }})}
                  className="bg-black/50 border-2 border-white/20 text-white placeholder:text-gray-600 h-11 focus:border-yellow-400"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <div className="border-l-8 border-red-500 pl-8 mb-10">
            <h2 className="text-5xl font-black mb-2 uppercase tracking-tight" style={{ fontFamily: 'Arial Black, sans-serif' }}>
              02. Skills
            </h2>
            <p className="text-gray-500 text-lg">What's in your toolkit?</p>
          </div>

          <div className="bg-white/5 p-10 rounded-none border-2 border-white/10">
            <div className="flex gap-4 mb-6">
              <Input 
                placeholder="Add a skill (e.g., React, Python, AWS)" 
                value={newSkill}
                onChange={e => setNewSkill(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleAddSkill()}
                className="bg-black/50 border-2 border-white/20 text-white placeholder:text-gray-600 h-12 text-lg focus:border-red-500"
              />
              <Button onClick={handleAddSkill} size="lg" className="bg-red-500 hover:bg-red-600 px-8">
                <Plus className="mr-2" /> Add
              </Button>
            </div>

            <div className="flex flex-wrap gap-3">
              {data.skills.map(skill => (
                <Badge 
                  key={skill} 
                  className="bg-red-500/20 text-red-400 border-2 border-red-500/50 px-4 py-2 text-base font-bold hover:bg-red-500/30 cursor-pointer group flex items-center gap-2"
                  onClick={() => removeSkill(skill)}
                >
                  {skill}
                  <Trash2 className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Badge>
              ))}
              {data.skills.length === 0 && (
                <p className="text-gray-600 italic">No skills added yet. Start adding your expertise!</p>
              )}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-20">
          <div className="border-l-8 border-blue-500 pl-8 mb-10">
            <h2 className="text-5xl font-black mb-2 uppercase tracking-tight" style={{ fontFamily: 'Arial Black, sans-serif' }}>
              03. Projects
            </h2>
            <p className="text-gray-500 text-lg">Showcase your work</p>
          </div>

          {/* Add Project Form */}
          <div className="bg-white/5 p-10 rounded-none border-2 border-white/10 mb-8">
            <h3 className="text-2xl font-black mb-6 uppercase tracking-tight text-blue-400">New Project</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Label className="text-base font-bold uppercase tracking-wider">Project Title</Label>
                <Input 
                  placeholder="My Awesome Project" 
                  value={projectForm.title}
                  onChange={e => setProjectForm({...projectForm, title: e.target.value})}
                  className="bg-black/50 border-2 border-white/20 text-white placeholder:text-gray-600 h-11 focus:border-blue-500"
                />
              </div>

              <div className="space-y-3">
                <Label className="text-base font-bold uppercase tracking-wider">Live Link (Optional)</Label>
                <Input 
                  placeholder="https://project.com" 
                  value={projectForm.link}
                  onChange={e => setProjectForm({...projectForm, link: e.target.value})}
                  className="bg-black/50 border-2 border-white/20 text-white placeholder:text-gray-600 h-11 focus:border-blue-500"
                />
              </div>

              <div className="md:col-span-2 space-y-3">
                <Label className="text-base font-bold uppercase tracking-wider">Description</Label>
                <Textarea 
                  placeholder="Describe your project..." 
                  value={projectForm.description}
                  onChange={e => setProjectForm({...projectForm, description: e.target.value})}
                  className="bg-black/50 border-2 border-white/20 text-white placeholder:text-gray-600 min-h-[100px] focus:border-blue-500"
                />
              </div>

              <div className="space-y-3">
                <Label className="text-base font-bold uppercase tracking-wider">GitHub (Optional)</Label>
                <Input 
                  placeholder="https://github.com/user/repo" 
                  value={projectForm.github}
                  onChange={e => setProjectForm({...projectForm, github: e.target.value})}
                  className="bg-black/50 border-2 border-white/20 text-white placeholder:text-gray-600 h-11 focus:border-blue-500"
                />
              </div>

              <div className="space-y-3">
                <Label className="text-base font-bold uppercase tracking-wider">Technologies</Label>
                <div className="flex gap-2">
                  <Input 
                    placeholder="React" 
                    value={newTech}
                    onChange={e => setNewTech(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleAddTech()}
                    className="bg-black/50 border-2 border-white/20 text-white placeholder:text-gray-600 h-11 focus:border-blue-500"
                  />
                  <Button onClick={handleAddTech} variant="outline" className="border-2">
                    <Plus />
                  </Button>
                </div>
              </div>

              <div className="md:col-span-2">
                <div className="flex flex-wrap gap-2 mb-4">
                  {projectForm.tech.map(tech => (
                    <Badge 
                      key={tech} 
                      className="bg-blue-500/20 text-blue-400 border-2 border-blue-500/50 px-3 py-1 cursor-pointer group flex items-center gap-2"
                      onClick={() => setProjectForm({...projectForm, tech: projectForm.tech.filter(t => t !== tech)})}
                    >
                      {tech}
                      <Trash2 className="w-3 h-3 opacity-0 group-hover:opacity-100" />
                    </Badge>
                  ))}
                </div>
                
                <Button onClick={handleAddProject} size="lg" className="w-full bg-blue-500 hover:bg-blue-600 h-14 text-lg font-bold">
                  <Plus className="mr-2" /> Add Project
                </Button>
              </div>
            </div>
          </div>

          {/* Projects List */}
          <div className="space-y-6">
            {data.projects.map(project => (
              <div key={project.id} className="bg-white/5 p-8 rounded-none border-2 border-white/10 hover:border-blue-500/50 transition-colors group">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-2xl font-black text-white group-hover:text-blue-400 transition-colors">{project.title}</h4>
                  <Button onClick={() => removeProject(project.id)} variant="destructive" size="icon">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(tech => (
                    <Badge key={tech} variant="outline" className="border-blue-500/50 text-blue-400">
                      {tech}
                    </Badge>
                  ))}
                </div>
                {(project.link || project.github) && (
                  <div className="flex gap-4 text-sm text-gray-500">
                    {project.link && <span>🔗 {project.link}</span>}
                    {project.github && <span>💻 {project.github}</span>}
                  </div>
                )}
              </div>
            ))}
            {data.projects.length === 0 && (
              <div className="text-center py-20 text-gray-600 border-2 border-dashed border-white/10">
                <Briefcase className="w-16 h-16 mx-auto mb-4 opacity-30" />
                <p className="text-xl">No projects yet. Add your first project above!</p>
              </div>
            )}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-20">
          <div className="border-l-8 border-purple-500 pl-8 mb-10">
            <h2 className="text-5xl font-black mb-2 uppercase tracking-tight" style={{ fontFamily: 'Arial Black, sans-serif' }}>
              04. Experience
            </h2>
            <p className="text-gray-500 text-lg">Your professional journey</p>
          </div>

          {/* Add Experience Form */}
          <div className="bg-white/5 p-10 rounded-none border-2 border-white/10 mb-8">
            <h3 className="text-2xl font-black mb-6 uppercase tracking-tight text-purple-400">New Experience</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Label className="text-base font-bold uppercase tracking-wider">Company</Label>
                <Input 
                  placeholder="Company Name" 
                  value={experienceForm.company}
                  onChange={e => setExperienceForm({...experienceForm, company: e.target.value})}
                  className="bg-black/50 border-2 border-white/20 text-white placeholder:text-gray-600 h-11 focus:border-purple-500"
                />
              </div>

              <div className="space-y-3">
                <Label className="text-base font-bold uppercase tracking-wider">Position</Label>
                <Input 
                  placeholder="Senior Developer" 
                  value={experienceForm.position}
                  onChange={e => setExperienceForm({...experienceForm, position: e.target.value})}
                  className="bg-black/50 border-2 border-white/20 text-white placeholder:text-gray-600 h-11 focus:border-purple-500"
                />
              </div>

              <div className="space-y-3">
                <Label className="text-base font-bold uppercase tracking-wider">Start Date</Label>
                <Input 
                  type="month"
                  value={experienceForm.startDate}
                  onChange={e => setExperienceForm({...experienceForm, startDate: e.target.value})}
                  className="bg-black/50 border-2 border-white/20 text-white h-11 focus:border-purple-500"
                />
              </div>

              <div className="space-y-3">
                <Label className="text-base font-bold uppercase tracking-wider">End Date</Label>
                <Input 
                  type="month"
                  value={experienceForm.endDate}
                  disabled={experienceForm.current}
                  onChange={e => setExperienceForm({...experienceForm, endDate: e.target.value})}
                  className="bg-black/50 border-2 border-white/20 text-white h-11 focus:border-purple-500 disabled:opacity-50"
                />
                <label className="flex items-center gap-2 text-sm text-gray-400 cursor-pointer">
                  <input 
                    type="checkbox"
                    checked={experienceForm.current}
                    onChange={e => setExperienceForm({...experienceForm, current: e.target.checked, endDate: ''})}
                    className="w-4 h-4"
                  />
                  Currently working here
                </label>
              </div>

              <div className="md:col-span-2 space-y-3">
                <Label className="text-base font-bold uppercase tracking-wider">Description</Label>
                <Textarea 
                  placeholder="Describe your role and responsibilities..." 
                  value={experienceForm.description}
                  onChange={e => setExperienceForm({...experienceForm, description: e.target.value})}
                  className="bg-black/50 border-2 border-white/20 text-white placeholder:text-gray-600 min-h-[100px] focus:border-purple-500"
                />
              </div>

              <div className="md:col-span-2 space-y-3">
                <Label className="text-base font-bold uppercase tracking-wider">Key Achievements</Label>
                <div className="flex gap-2 mb-3">
                  <Input 
                    placeholder="Add an achievement" 
                    value={newAchievement}
                    onChange={e => setNewAchievement(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleAddAchievement()}
                    className="bg-black/50 border-2 border-white/20 text-white placeholder:text-gray-600 h-11 focus:border-purple-500"
                  />
                  <Button onClick={handleAddAchievement} variant="outline" className="border-2">
                    <Plus />
                  </Button>
                </div>
                <ul className="space-y-2">
                  {experienceForm.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                      <Award className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                      <span className="flex-1">{achievement}</span>
                      <Button 
                        onClick={() => setExperienceForm({...experienceForm, achievements: experienceForm.achievements.filter((_, i) => i !== idx)})}
                        variant="ghost"
                        size="icon-xs"
                      >
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-2">
                <Button onClick={handleAddExperience} size="lg" className="w-full bg-purple-500 hover:bg-purple-600 h-14 text-lg font-bold">
                  <Plus className="mr-2" /> Add Experience
                </Button>
              </div>
            </div>
          </div>

          {/* Experience List */}
          <div className="space-y-6">
            {data.experience.map(exp => (
              <div key={exp.id} className="bg-white/5 p-8 rounded-none border-2 border-white/10 hover:border-purple-500/50 transition-colors group">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-2xl font-black text-white group-hover:text-purple-400 transition-colors">{exp.position}</h4>
                    <p className="text-lg text-gray-400">{exp.company}</p>
                    <p className="text-sm text-gray-600 mt-1">
                      {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                    </p>
                  </div>
                  <Button onClick={() => removeExperience(exp.id)} variant="destructive" size="icon">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-gray-400 mb-4">{exp.description}</p>
                {exp.achievements.length > 0 && (
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <Award className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            {data.experience.length === 0 && (
              <div className="text-center py-20 text-gray-600 border-2 border-dashed border-white/10">
                <Briefcase className="w-16 h-16 mx-auto mb-4 opacity-30" />
                <p className="text-xl">No experience added yet. Add your first role above!</p>
              </div>
            )}
          </div>
        </section>

        {/* Action Buttons */}
        <div className="flex gap-6 justify-center pt-12 border-t-4 border-white">
          <Button asChild size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500 px-12 h-16 text-xl font-black uppercase">
            <a href="/preview">
              <Eye className="mr-3" /> Preview Portfolio
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}