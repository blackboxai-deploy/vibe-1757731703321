'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface FormData {
  requesterName: string;
  clinicName: string;
  email: string;
  phone: string;
  examType: string;
  patientInfo: string;
  priority: string;
}

export default function MediLaudosWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [fileName, setFileName] = useState<string>('');
  const [formData, setFormData] = useState<FormData>({
    requesterName: '',
    clinicName: '',
    email: '',
    phone: '',
    examType: '',
    patientInfo: '',
    priority: 'normal'
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName('');
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form data submitted:', { ...formData, fileName });
    alert('Sua solicitação de laudo foi enviada com sucesso! Nossa equipe entrará em contato em breve.');
    setFormData({
      requesterName: '',
      clinicName: '',
      email: '',
      phone: '',
      examType: '',
      patientInfo: '',
      priority: 'normal'
    });
    setFileName('');
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navLinks = [
    { id: 'inicio', label: 'Início' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'galeria', label: 'Galeria' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'como-funciona', label: 'Como Funciona' },
    { id: 'depoimentos', label: 'Depoimentos' },
    { id: 'solicitar-laudo', label: 'Solicitar Laudo' },
    { id: 'contato', label: 'Contato' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-blue-900/90 backdrop-blur-sm z-50 shadow-lg border-b border-blue-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('inicio')}>
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg">
                <span className="text-2xl font-bold text-white">✚</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-white tracking-tight">MediLaudos Pro</span>
                <p className="text-blue-200 text-xs">Especialistas em Diagnóstico</p>
              </div>
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="font-medium text-blue-200 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Button onClick={() => scrollToSection('solicitar-laudo')} className="bg-white text-blue-900 hover:bg-blue-50">
                Portal do Cliente
              </Button>
            </div>

            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                {isMenuOpen ? <span className="text-2xl">×</span> : <span className="text-xl">☰</span>}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-blue-900/95 border-t border-blue-700">
            <nav className="flex flex-col space-y-1 p-4">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="px-4 py-3 text-left font-medium text-blue-200 hover:text-white hover:bg-blue-800/50 rounded-md transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <Button onClick={() => scrollToSection('solicitar-laudo')} className="w-full mt-4 bg-white text-blue-900 hover:bg-blue-50">
                Portal do Cliente
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <main>
        <section id="inicio" className="pt-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-blue-800/50 rounded-full text-blue-200 text-sm font-medium mb-6 border border-blue-600/30">
                  <span className="mr-2">🛡️</span>
                  Certificado pelo CFM
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                  Laudos Médicos
                  <span className="block text-blue-300">Precisos e Rápidos</span>
                </h1>
                <p className="text-xl text-blue-200 max-w-xl mb-8 leading-relaxed">
                  Equipe especializada de médicos radiologistas oferecendo laudos de alta qualidade 
                  para clínicas e hospitais. Entrega garantida em até 2 horas.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50" onClick={() => scrollToSection('solicitar-laudo')}>
                    Solicitar Laudo Agora
                    <span className="ml-2">→</span>
                  </Button>
                  <Button size="lg" variant="outline" className="border-blue-400 text-blue-200 hover:bg-blue-800/50" onClick={() => scrollToSection('sobre')}>
                    Conheça Nossa Equipe
                  </Button>
                </div>
                <div className="flex items-center space-x-6 text-blue-200">
                  <div className="flex items-center">
                    <span className="mr-2">👥</span>
                    <span>+10.000 laudos/mês</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">⏰</span>
                    <span>Entrega em 2h</span>
                  </div>
                </div>
              </div>
              <div className="hidden lg:flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl blur-xl opacity-30"></div>
                  <img
                    className="relative rounded-2xl shadow-2xl object-cover border border-blue-600/30"
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/085a6a49-2088-4b12-bbb6-6be8fba69491.png"
                    alt="Médico especialista analisando exames de ressonância magnética em workstation moderna com múltiplos monitores"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="py-20 bg-blue-800/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                Sobre a MediLaudos Pro
              </h2>
              <p className="text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
                Somos uma equipe de médicos radiologistas especializados, comprometidos em oferecer 
                laudos médicos de excelência com a rapidez que sua clínica precisa.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <Card className="bg-blue-800/30 border-blue-600/50 text-white">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">👨‍⚕️</span>
                  </div>
                  <CardTitle className="text-xl font-bold">Equipe Especializada</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-200 text-center leading-relaxed">
                    Médicos radiologistas com ampla experiência e especializações em diferentes áreas da medicina diagnóstica.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-blue-800/30 border-blue-600/50 text-white">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <CardTitle className="text-xl font-bold">Rapidez Garantida</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-200 text-center leading-relaxed">
                    Entrega de laudos em até 2 horas para casos urgentes, com qualidade técnica incomparável.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-blue-800/30 border-blue-600/50 text-white">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <CardTitle className="text-xl font-bold">Segurança Total</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-200 text-center leading-relaxed">
                    Plataforma segura com certificação LGPD e protocolos rígidos de proteção de dados médicos.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-lg text-blue-200 max-w-3xl mx-auto mb-8">
                Nossa missão é conectar médicos especialistas com clínicas e hospitais em todo o Brasil, 
                proporcionando diagnósticos precisos que auxiliam em decisões médicas assertivas.
              </p>
              <Button size="lg" onClick={() => scrollToSection('servicos')} className="bg-blue-600 hover:bg-blue-700 text-white">
                Conheça Nossos Serviços
              </Button>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="galeria" className="py-20 bg-blue-900/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                Galeria de Fotos
              </h2>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Conheça nossa equipe, instalações e tecnologia de ponta que utilizamos para garantir a qualidade dos laudos.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { 
                  src: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cd8fda8d-3830-404a-9536-a8f544145432.png', 
                  alt: 'Equipe de radiologistas especializados trabalhando em ambiente moderno e tecnológico' 
                },
                { 
                  src: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/894607c5-8b7f-4aae-b4f6-237260163474.png', 
                  alt: 'Sala de laudos médicos com múltiplas workstations e monitores de alta resolução' 
                },
                { 
                  src: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7845833f-f2eb-4f73-8ccb-c30af6c5fee4.png', 
                  alt: 'Equipamentos de ressonância magnética e tomografia em hospital moderno' 
                },
                { 
                  src: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f46e2ece-c85a-4fcb-ab52-0524cf9386f1.png', 
                  alt: 'Consultório médico moderno com tecnologia digital avançada para diagnósticos' 
                },
                { 
                  src: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4423fd09-8096-4e72-ae49-bb4bf03a05c8.png', 
                  alt: 'Radiologista analisando exames em workstation com monitores calibrados' 
                },
                { 
                  src: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/102ce022-75cd-4c10-82fc-9918aed6475d.png', 
                  alt: 'Tecnologia avançada em radiologia digital com sistemas PACS integrados' 
                },
              ].map(({ src, alt }, idx) => (
                <div key={idx} className="overflow-hidden rounded-lg shadow-lg border border-blue-600/50 cursor-pointer transform hover:scale-105 transition-transform duration-300">
                  <img src={src} alt={alt} className="w-full h-48 object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicos" className="py-20 bg-blue-800/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                Nossos Serviços
              </h2>
              <p className="text-xl text-blue-200 max-w-4xl mx-auto">
                Oferecemos uma ampla gama de laudos médicos especializados com a mais alta qualidade técnica.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Ressonância Magnética",
                  description: "Laudos detalhados de RM com análise minuciosa de todas as sequências e protocolos.",
                  icon: "🧠"
                },
                {
                  title: "Tomografia Computadorizada",
                  description: "Interpretação precisa de exames de TC com reconstruções multiplanares e 3D.",
                  icon: "💻"
                },
                {
                  title: "Radiografia Convencional",
                  description: "Análise completa de radiografias simples e contrastadas de todas as regiões anatômicas.",
                  icon: "📸"
                },
                {
                  title: "Ultrassonografia",
                  description: "Laudos de ultrassom com descrições detalhadas e medições precisas.",
                  icon: "📡"
                },
                {
                  title: "Mamografia",
                  description: "Especialização em laudos mamográficos seguindo protocolos BI-RADS.",
                  icon: "🩺"
                },
                {
                  title: "Densitometria Óssea",
                  description: "Avaliação precisa da densidade mineral óssea com classificação OMS.",
                  icon: "🦴"
                }
              ].map((service, idx) => (
                <Card key={idx} className="bg-blue-800/30 border-blue-600/50 text-white hover:bg-blue-800/40 transition-colors">
                  <CardHeader>
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-200">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" onClick={() => scrollToSection('como-funciona')} className="bg-blue-600 hover:bg-blue-700 text-white">
                Veja Como Funciona
              </Button>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="como-funciona" className="py-20 bg-blue-900/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                Como Funciona
              </h2>
              <p className="text-xl text-blue-200 max-w-4xl mx-auto">
                Processo simples e eficiente para solicitar seus laudos médicos com qualidade e rapidez.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Envio do Exame",
                  description: "Faça upload dos arquivos DICOM ou imagens através de nossa plataforma segura.",
                  icon: "📤"
                },
                {
                  step: "02", 
                  title: "Análise Especializada",
                  description: "Nossos radiologistas analisam o exame com critério técnico e experiência clínica.",
                  icon: "🔍"
                },
                {
                  step: "03",
                  title: "Elaboração do Laudo",
                  description: "Redação detalhada seguindo protocolos médicos e padrões de qualidade.",
                  icon: "✍️"
                },
                {
                  step: "04",
                  title: "Entrega Rápida",
                  description: "Laudo disponibilizado em até 2 horas com assinatura digital válida.",
                  icon: "🚀"
                }
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                      {item.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-blue-900 rounded-full flex items-center justify-center font-bold text-sm">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-blue-200">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" onClick={() => scrollToSection('solicitar-laudo')} className="bg-white text-blue-900 hover:bg-blue-50">
                Solicitar Laudo Agora
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="depoimentos" className="py-20 bg-blue-800/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                O Que Dizem Nossos Clientes
              </h2>
              <p className="text-xl text-blue-200 max-w-4xl mx-auto">
                Depoimentos de médicos e clínicas que confiam em nossos serviços para diagnósticos precisos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Dr. Carlos Silva",
                  role: "Clínica Ortopédica São Paulo",
                  testimonial: "A qualidade dos laudos e a rapidez na entrega transformaram nossa rotina. Recomendo para todas as clínicas.",
                  rating: 5
                },
                {
                  name: "Dra. Ana Rodrigues", 
                  role: "Hospital Santa Maria",
                  testimonial: "Profissionais extremamente competentes. Os laudos são detalhados e sempre dentro do prazo acordado.",
                  rating: 5
                },
                {
                  name: "Dr. Roberto Costa",
                  role: "Centro de Diagnóstico Norte",
                  testimonial: "Parceria excepcional! A MediLaudos Pro elevou o padrão de qualidade dos nossos relatórios médicos.",
                  rating: 5
                }
              ].map((testimonial, idx) => (
                <Card key={idx} className="bg-blue-800/30 border-blue-600/50 text-white">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">★</span>
                      ))}
                    </div>
                    <CardTitle className="text-lg font-bold text-center">{testimonial.name}</CardTitle>
                    <CardDescription className="text-blue-300 text-center">{testimonial.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-200 text-center italic">"{testimonial.testimonial}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Request Form Section */}
        <section id="solicitar-laudo" className="py-20 bg-blue-900/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                Solicitar Laudo Médico
              </h2>
              <p className="text-xl text-blue-200 max-w-4xl mx-auto">
                Preencha o formulário abaixo para solicitar seu laudo médico. Nossa equipe entrará em contato rapidamente.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <Card className="bg-blue-800/30 border-blue-600/50 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center">Formulário de Solicitação</CardTitle>
                  <CardDescription className="text-blue-200 text-center">
                    Todos os campos são obrigatórios para processar sua solicitação
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="requesterName" className="text-white">Nome do Solicitante</Label>
                        <Input
                          id="requesterName"
                          name="requesterName"
                          type="text"
                          value={formData.requesterName}
                          onChange={handleInputChange}
                          className="bg-blue-900/50 border-blue-600 text-white placeholder:text-blue-300"
                          placeholder="Dr. João Silva"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="clinicName" className="text-white">Nome da Clínica/Hospital</Label>
                        <Input
                          id="clinicName"
                          name="clinicName"
                          type="text"
                          value={formData.clinicName}
                          onChange={handleInputChange}
                          className="bg-blue-900/50 border-blue-600 text-white placeholder:text-blue-300"
                          placeholder="Clínica São Paulo"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email" className="text-white">E-mail</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="bg-blue-900/50 border-blue-600 text-white placeholder:text-blue-300"
                          placeholder="contato@clinica.com"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-white">Telefone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="bg-blue-900/50 border-blue-600 text-white placeholder:text-blue-300"
                          placeholder="(11) 99999-9999"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="examType" className="text-white">Tipo de Exame</Label>
                        <Select onValueChange={handleSelectChange('examType')}>
                          <SelectTrigger className="bg-blue-900/50 border-blue-600 text-white">
                            <SelectValue placeholder="Selecione o tipo de exame" />
                          </SelectTrigger>
                          <SelectContent className="bg-blue-900 border-blue-600">
                            <SelectItem value="ressonancia">Ressonância Magnética</SelectItem>
                            <SelectItem value="tomografia">Tomografia Computadorizada</SelectItem>
                            <SelectItem value="radiografia">Radiografia</SelectItem>
                            <SelectItem value="ultrassom">Ultrassonografia</SelectItem>
                            <SelectItem value="mamografia">Mamografia</SelectItem>
                            <SelectItem value="densitometria">Densitometria Óssea</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="priority" className="text-white">Prioridade</Label>
                        <Select onValueChange={handleSelectChange('priority')} defaultValue="normal">
                          <SelectTrigger className="bg-blue-900/50 border-blue-600 text-white">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-blue-900 border-blue-600">
                            <SelectItem value="urgente">Urgente (2 horas)</SelectItem>
                            <SelectItem value="normal">Normal (24 horas)</SelectItem>
                            <SelectItem value="rotina">Rotina (48 horas)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="patientInfo" className="text-white">Informações do Paciente</Label>
                      <Textarea
                        id="patientInfo"
                        name="patientInfo"
                        value={formData.patientInfo}
                        onChange={handleInputChange}
                        className="bg-blue-900/50 border-blue-600 text-white placeholder:text-blue-300"
                        placeholder="Idade, sexo, história clínica relevante, suspeita diagnóstica..."
                        rows={4}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="examFile" className="text-white">Arquivo do Exame</Label>
                      <div className="mt-2">
                        <Input
                          id="examFile"
                          type="file"
                          onChange={handleFileChange}
                          className="bg-blue-900/50 border-blue-600 text-white file:bg-blue-600 file:text-white file:border-0 file:rounded-md file:px-4 file:py-2 file:mr-4"
                          accept=".dcm,.jpg,.jpeg,.png,.pdf,.zip,.rar"
                        />
                        {fileName && (
                          <p className="text-green-300 text-sm mt-2">
                            ✓ Arquivo selecionado: {fileName}
                          </p>
                        )}
                      </div>
                      <p className="text-blue-300 text-xs mt-1">
                        Formatos aceitos: DICOM (.dcm), Imagens (.jpg, .png), PDF, ZIP, RAR
                      </p>
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-white text-blue-900 hover:bg-blue-50"
                    >
                      Enviar Solicitação
                      <span className="ml-2">📤</span>
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="py-20 bg-blue-800/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                Entre em Contato
              </h2>
              <p className="text-xl text-blue-200 max-w-4xl mx-auto">
                Nossa equipe está disponível para esclarecer dúvidas e fornecer suporte técnico.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-blue-800/30 border-blue-600/50 text-white text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">📞</span>
                  </div>
                  <CardTitle className="text-xl font-bold">Telefone</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-200">Central de Atendimento</p>
                  <p className="text-white font-semibold text-lg">(11) 3333-4444</p>
                  <p className="text-blue-300 text-sm">Segunda à Sexta: 7h às 19h</p>
                </CardContent>
              </Card>

              <Card className="bg-blue-800/30 border-blue-600/50 text-white text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">📱</span>
                  </div>
                  <CardTitle className="text-xl font-bold">WhatsApp</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-200">Atendimento Rápido</p>
                  <p className="text-white font-semibold text-lg">(11) 99999-1234</p>
                  <p className="text-blue-300 text-sm">24 horas para urgências</p>
                </CardContent>
              </Card>

              <Card className="bg-blue-800/30 border-blue-600/50 text-white text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">📧</span>
                  </div>
                  <CardTitle className="text-xl font-bold">E-mail</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-200">Suporte Técnico</p>
                  <p className="text-white font-semibold">contato@medilaudospro.com</p>
                  <p className="text-blue-300 text-sm">Resposta em até 2 horas</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <div className="bg-blue-800/30 border border-blue-600/50 rounded-lg p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">Endereço</h3>
                <p className="text-blue-200 mb-2">Rua dos Médicos, 123 - Conjunto 45</p>
                <p className="text-blue-200 mb-2">Vila Clínica - São Paulo, SP</p>
                <p className="text-blue-200 mb-4">CEP: 01234-567</p>
                <p className="text-blue-300 text-sm">
                  <span className="text-yellow-400">⚠️</span> 
                  Atendimento presencial apenas mediante agendamento
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900/50 backdrop-blur border-t border-blue-700/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg">
                  <span className="text-2xl font-bold text-white">✚</span>
                </div>
                <div>
                  <span className="text-2xl font-bold text-white">MediLaudos Pro</span>
                  <p className="text-blue-200 text-xs">Especialistas em Diagnóstico</p>
                </div>
              </div>
              <p className="text-blue-200 mb-6 leading-relaxed max-w-md">
                Conectando médicos especialistas com clínicas e hospitais em todo o Brasil. 
                Diagnósticos precisos para decisões médicas assertivas.
              </p>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-white mb-4">Siga-nos nas redes sociais</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://facebook.com/medilaudospro" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center w-10 h-10 bg-blue-800/50 backdrop-blur rounded-lg hover:bg-blue-600 transition-colors group"
                    aria-label="Facebook da MediLaudos Pro"
                  >
                    <span className="text-lg">📘</span>
                  </a>
                  <a 
                    href="https://instagram.com/medilaudospro" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center w-10 h-10 bg-blue-800/50 backdrop-blur rounded-lg hover:bg-pink-600 transition-colors group"
                    aria-label="Instagram da MediLaudos Pro"
                  >
                    <span className="text-lg">📷</span>
                  </a>
                  <a 
                    href="https://linkedin.com/company/medilaudospro" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center w-10 h-10 bg-blue-800/50 backdrop-blur rounded-lg hover:bg-blue-700 transition-colors group"
                    aria-label="LinkedIn da MediLaudos Pro"
                  >
                    <span className="text-lg">💼</span>
                  </a>
                  <a 
                    href="https://twitter.com/medilaudospro" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center w-10 h-10 bg-blue-800/50 backdrop-blur rounded-lg hover:bg-sky-500 transition-colors group"
                    aria-label="Twitter da MediLaudos Pro"
                  >
                    <span className="text-lg">🐦</span>
                  </a>
                </div>
                <div className="space-y-2 text-sm text-blue-300">
                  <p>📧 Newsletter: contato@medilaudospro.com</p>
                  <p>📱 WhatsApp: (11) 99999-1234</p>
                  <p>🌐 Portal: www.medilaudospro.com.br</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-6">Navegação</h4>
              <ul className="space-y-3">
                {navLinks.map(link => (
                  <li key={link.id}>
                    <button 
                      onClick={() => scrollToSection(link.id)} 
                      className="text-blue-200 hover:text-white transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-6">Informações</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Certificações Médicas</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">FAQ - Perguntas Frequentes</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Trabalhe Conosco</a></li>
              </ul>
              
              <div className="mt-6 p-4 bg-blue-800/30 backdrop-blur rounded-lg border border-blue-600/30">
                <p className="text-blue-200 text-sm mb-2">
                  <span className="mr-1">🛡️</span>
                  Empresa Certificada
                </p>
                <p className="text-blue-300 text-xs">
                  CFM Validado | CNPJ: 12.345.678/0001-90
                </p>
                <p className="text-blue-300 text-xs">
                  Responsável Técnico: Dr. João Silva
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-blue-700/50 pt-8 mt-8">
            <div className="text-center">
              <p className="text-blue-300 text-sm">
                © 2024 MediLaudos Pro. Todos os direitos reservados. | CNPJ: 12.345.678/0001-90
              </p>
              <p className="text-blue-400 text-xs mt-2">
                Desenvolvido com ❤️ para profissionais da saúde
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}