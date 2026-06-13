import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { Home } from './pages/home/home';
import { Membros } from './pages/membros/membros';

export const routes: Routes = [
  { path: '', component: Home },
   { path: 'membros', component: Membros }
];