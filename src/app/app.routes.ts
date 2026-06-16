import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Membros } from './pages/membros/membros';
import { MulheresCiencia } from './pages/mulheres-ciencia/mulheres-ciencia';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'membros', component: Membros },
  { path: 'mulheres-ciencia', component: MulheresCiencia },

];