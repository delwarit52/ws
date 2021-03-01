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
Route::get('/home_project_summary',[\App\Http\Controllers\Frontend\HomeController::class,'home_project_summary']);
Route::get('/home_project',[\App\Http\Controllers\Frontend\HomeController::class,'home_project']);
Route::get('/home_achivement',[\App\Http\Controllers\Frontend\HomeController::class,'home_achivement']);
Route::get('/home_review',[\App\Http\Controllers\Frontend\HomeController::class,'home_review']);



//About Page routes
Route::get('/aboutContent',[\App\Http\Controllers\Frontend\AboutController::class,'about']);

//About Page routes
Route::get('/serviceList',[\App\Http\Controllers\Frontend\ServiceController::class,'service']);
Route::post('/serviceDetail',[\App\Http\Controllers\Frontend\ServiceController::class,'serviceDetail']);

// Course Page Routes
Route::get('/courseCat',[\App\Http\Controllers\Frontend\CourseController::class,'courseCat']);
Route::post('/courselist',[\App\Http\Controllers\Frontend\CourseController::class,'courselist']);
Route::post('/courseDetail',[\App\Http\Controllers\Frontend\CourseController::class,'courseDetail']);


// project page Route
Route::get('/projectCat',[\App\Http\Controllers\Frontend\ProjectController::class,'projectCat']);
Route::get('/projectlist',[\App\Http\Controllers\Frontend\ProjectController::class,'projectlist']);
Route::post('/catProject',[\App\Http\Controllers\Frontend\ProjectController::class,'catProject']);



// Team page route

Route::get('/teamlist',[\App\Http\Controllers\Frontend\TeamController::class,'teamlist']);


// Contact page route
Route::get('/contactInfo',[\App\Http\Controllers\Frontend\ContactController::class,'contacts']);


// website Admin
Route::get('/getInfo',[\App\Http\Controllers\Admin\InfoController::class,'getInfo']);
Route::post('/updateInfo',[\App\Http\Controllers\Admin\InfoController::class,'updateInfo']);


//slider
Route::get('/slider',[\App\Http\Controllers\Admin\SliderController::class,'slider']);
Route::post('/sliderDelete',[\App\Http\Controllers\Admin\SliderController::class,'deleteSlider']);
Route::post('/addSlider',[\App\Http\Controllers\Admin\SliderController::class,'addSlider']);



Route::get('{AnyRoute}',function(){
    return view('index');
})->where('AnyRoute','.*');

