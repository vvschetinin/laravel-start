<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;

// Главная страница
Route::get('/', [HomeController::class, 'index'])->name('home');
