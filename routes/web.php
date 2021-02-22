<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Frontend
Route::get('/', function () {
    return view('index');
});

Route::get('/home_info',[\App\Http\Controllers\Frontend\HomeController::class,'home_info']);
Route::get('/home_analytic',[\App\Http\Controllers\Frontend\HomeController::class,'home_analytic']);
Route::get('/home_about',[\App\Http\Controllers\Frontend\HomeController::class,'home_about']);
Route::get('/home_service',[\App\Http\Controllers\Frontend\HomeController::class,'home_service']);
Route::get('/home_course_cat',[\App\Http\Controllers\Frontend\HomeController::class,'home_course_cat']);
Route::get('/home_course_list',[\App\Http\Controllers\Frontend\HomeController::class,'home_course_list']);



// website Admin
Route::get('/getInfo',[\App\Http\Controllers\Admin\InfoController::class,'getInfo']);






Route::get('{AnyRoute}',function(){
    return view('index');
})->where('AnyRoute','.*');

