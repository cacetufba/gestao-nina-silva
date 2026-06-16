import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { MulheresCiencia } from './pages/mulheres-ciencia/mulheres-ciencia';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'mulheres-ciencia', component: MulheresCiencia }
];