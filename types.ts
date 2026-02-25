
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  imageUrl: string;
  specs?: Record<string, string>;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  gallery: string[];
}
