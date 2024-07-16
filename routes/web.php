<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', static function () {
    return Inertia::render('Website/Home');
})->name('home');

Route::get('/rooms', static function () {
    return Inertia::render('Website/Rooms');
})->name('rooms');

Route::get('/food', static function () {
    return Inertia::render('Website/Food');
})->name('food');

Route::get('/about', static function () {
    return Inertia::render('Website/About');
})->name('about');

Route::get('/dashboard', static function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', "verified"])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::post('/testform', [ProfileController::class, 'testform'])->name('testform');
require __DIR__ . '/auth.php';
