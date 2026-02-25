
import React from 'react';
import { Project } from './types';

export const SERVICES = [
  {
    id: 'directional-drilling',
    title: 'Forage Dirigé (HDD)',
    description: 'Franchissement d\'obstacles par guidage électromagnétique haute fréquence. Idéal pour les réseaux gaz et fibre optique.',
    specs: { diam: 'Ø50-630mm', dist: '100m max' },
    imageUrl: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'pipe-jacking',
    title: 'Fonçage de Conduite',
    description: 'Mise en place de gaines béton ou acier par poussée hydraulique forte puissance (jusqu\'à 500 tonnes).',
    specs: { diam: 'Ø400-1400mm', dist: '100m max' },
    imageUrl: 'https://i.ibb.co/RGsqs7V5/foncage.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'microtunneling',
    title: 'Micro-tunnelage TBM',
    description: 'Excavation mécanisée par tunnelier à pression de boue. Contrôle total des tassements en zone urbaine.',
    specs: { diam: 'Ø600-3000mm', dist: '100m max' },
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35682f94a1d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'geotechnical-studies',
    title: 'Expertise Géotechnique',
    description: 'Analyse G1/G2 et dimensionnement des blindages de puits pour sécuriser les tirs de forage complexes.',
    specs: { type: 'G1-G5 / EXE', audit: 'In situ' },
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592dee58c460?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Robert Meyer',
    role: 'Chef de Projet, GRTgaz',
    content: 'Le forage dirigé sous la Seine a été réalisé avec une précision millimétrée malgré des conditions géologiques difficiles. Une prouesse technique.',
    avatar: 'https://i.pravatar.cc/150?u=robert'
  },
  {
    id: 2,
    name: 'Sophie Laurent',
    role: 'Directrice VRD, Métropole de Lyon',
    content: 'Grâce à leur technique de fonçage, nous avons pu rénover le réseau d\'assainissement sans jamais interrompre le trafic routier majeur.',
    avatar: 'https://i.pravatar.cc/150?u=sophie'
  },
  {
    id: 3,
    name: 'Marc Vallet',
    role: 'Ingénieur Ouvrages d\'Art',
    content: 'La gestion des pressions de boue lors du tir de forage était exemplaire. Zéro incident de surface, objectif atteint.',
    avatar: 'https://i.pravatar.cc/150?u=marc'
  }
];

export const PROJECTS: Project[] = [
  { 
    id: 1, 
    title: 'Traversée de l\'A86', 
    category: 'Fonçage horizontal', 
    description: 'Installation d\'un fourreau acier Ø1000mm sous les 12 voies de l\'A86 sans impact sur le trafic.',
    imageUrl: 'https://i.ibb.co/jP1H0TZD/IMG-20171121-WA0002.jpg?auto=format&fit=crop&w=1200&q=80?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://i.ibb.co/jP1H0TZD/IMG-20171121-WA0002.jpg?auto=format&fit=crop&w=1200&q=80?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504307651254-35682f94a1d8?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  { 
    id: 2, 
    title: 'Réseau Gaz Sous-Fluvial', 
    category: 'Forage Dirigé HDD', 
    description: 'Franchissement de la Marne sur 350m pour une canalisation haute pression.',
    imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  { 
    id: 3, 
    title: 'Collecteur Ville Haute', 
    category: 'Microtunnelage', 
    description: 'Création d\'un collecteur d\'eaux usées en zone urbaine dense avec tunnelier à pression de boue.',
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35682f94a1d8?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504307651254-35682f94a1d8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  { 
    id: 4, 
    title: 'Alésage Haute Performance', 
    category: 'Forage Dirigé HDD', 
    description: 'Utilisation de nos nouvelles têtes d\'alésage carbure pour terrains rocheux.',
    imageUrl: 'https://images.unsplash.com/photo-1517089596392-db21523344c8?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517089596392-db21523344c8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&w=1200&q=80'
    ]
  },
];

