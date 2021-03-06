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
Route::get('/home_logo',[\App\Http\Controllers\Frontend\HomeController::class,'home_logo']);
Route::get('/home_slider',[\App\Http\Controllers\Frontend\HomeController::class,'home_slider']);
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
Route::post('/editSlider',[\App\Http\Controllers\Admin\SliderController::class,'editSlider']);
Route::post('/updateSlider',[\App\Http\Controllers\Admin\SliderController::class,'updateSlider']);
Route::post('/updateSliderWithImg',[\App\Http\Controllers\Admin\SliderController::class,'updateSliderWithImg']);

//AnaLytic
Route::get('/analytic',[\App\Http\Controllers\Admin\AnalyticController::class,'analytic']);
Route::post('/editAnalytic',[\App\Http\Controllers\Admin\AnalyticController::class,'editAnalytic']);
Route::post('/updateAnalytic',[\App\Http\Controllers\Admin\AnalyticController::class,'updateAnalytic']);
Route::post('/updateAnalyticWithImg',[\App\Http\Controllers\Admin\AnalyticController::class,'updateAnalyticWithImg']);

//About
Route::get('/adminAbout',[\App\Http\Controllers\Admin\AboutController::class,'adminAbout']);
Route::post('/editAbout',[\App\Http\Controllers\Admin\AboutController::class,'editAbout']);
Route::post('/updateAbout',[\App\Http\Controllers\Admin\AboutController::class,'updateAbout']);
Route::post('/updateAboutWithImg',[\App\Http\Controllers\Admin\AboutController::class,'updateAboutWithImg']);

//Service
Route::get('/adminService',[\App\Http\Controllers\Admin\ServiceController::class,'service']);
Route::post('/addService',[\App\Http\Controllers\Admin\ServiceController::class,'addService']);
Route::post('/editService',[\App\Http\Controllers\Admin\ServiceController::class,'editService']);

Route::post('/updateService',[\App\Http\Controllers\Admin\ServiceController::class,'updateService']);
Route::post('/updateServiceWithImg',[\App\Http\Controllers\Admin\ServiceController::class,'updateServiceWithImg']);
Route::post('/deleteService',[\App\Http\Controllers\Admin\ServiceController::class,'deleteService']);

//Course

Route::get('/adminCourseCat',[\App\Http\Controllers\Admin\CourseCatController::class,'cat']);
Route::post('/editCourseCat',[\App\Http\Controllers\Admin\CourseCatController::class,'editCourseCat']);
Route::post('/updateCourseCat',[\App\Http\Controllers\Admin\CourseCatController::class,'updateCourseCat']);
Route::post('/updateCourseCatWithImg',[\App\Http\Controllers\Admin\CourseCatController::class,'updateCourseCatWithImg']);

Route::post('/addCourseCat',[\App\Http\Controllers\Admin\CourseCatController::class,'addCourseCat']);
Route::post('/courseCatDelete',[\App\Http\Controllers\Admin\CourseCatController::class,'courseCatDelete']);

//Project Summary
Route::get('/projectSummary',[\App\Http\Controllers\Admin\ProjectSummaryController::class,'projectSummary']);
Route::post('/editProjectSummaryCat',[\App\Http\Controllers\Admin\ProjectSummaryController::class,'editProjectSummaryCat']);
Route::post('/updateProjectSummary',[\App\Http\Controllers\Admin\ProjectSummaryController::class,'updateProjectSummary']);

//project Cat
Route::get('/adminProjectCat',[\App\Http\Controllers\Admin\ProjectCatController::class,'cat']);
Route::post('/editProjectCat',[\App\Http\Controllers\Admin\ProjectCatController::class,'editCat']);
Route::post('/updateProjectCat',[\App\Http\Controllers\Admin\ProjectCatController::class,'updateProjectCat']);
Route::post('/projectCatDelete',[\App\Http\Controllers\Admin\ProjectCatController::class,'projectCatDelete']);
Route::post('/addProjectCat',[\App\Http\Controllers\Admin\ProjectCatController::class,'addProjectCat']);

//Project

Route::get('/project',[\App\Http\Controllers\Admin\ProjectController::class,'project']);
Route::post('/editProject',[\App\Http\Controllers\Admin\ProjectController::class,'editProject']);
Route::post('/updateProject',[\App\Http\Controllers\Admin\ProjectController::class,'updateProject']);
Route::post('/updateProjectWithImg',[\App\Http\Controllers\Admin\ProjectController::class,'updateProjectWithImg']);
Route::post('/addProject',[\App\Http\Controllers\Admin\ProjectController::class,'addProject']);
Route::post('/deleteProject',[\App\Http\Controllers\Admin\ProjectController::class,'deleteProject']);


//Course
Route::get('/course',[\App\Http\Controllers\Admin\CourseController::class,'course']);
Route::post('/editCourse',[\App\Http\Controllers\Admin\CourseController::class,'editCourse']);
Route::post('/updateCourse',[\App\Http\Controllers\Admin\CourseController::class,'updateCourse']);
Route::post('/updateCourseWithImg',[\App\Http\Controllers\Admin\CourseController::class,'updateCourseWithImg']);
Route::post('/deleteCourse',[\App\Http\Controllers\Admin\CourseController::class,'deleteCourse']);

Route::post('/addCourse',[\App\Http\Controllers\Admin\CourseController::class,'addCourse']);


//Review

Route::get('/review',[\App\Http\Controllers\Admin\ClientReviewController::class,'review']);
Route::post('/editReview',[\App\Http\Controllers\Admin\ClientReviewController::class,'editReview']);
Route::post('/updateReview',[\App\Http\Controllers\Admin\ClientReviewController::class,'updateReview']);
Route::post('/updateReviewWithImg',[\App\Http\Controllers\Admin\ClientReviewController::class,'updateReviewWithImg']);

Route::post('/deleteReview',[\App\Http\Controllers\Admin\ClientReviewController::class,'deleteReview']);
Route::post('/addReview',[\App\Http\Controllers\Admin\ClientReviewController::class,'addReview']);



//Achivment
Route::get('/achivment',[\App\Http\Controllers\Admin\AchivmentController::class,'achivment']);
Route::post('/updateAchivment',[\App\Http\Controllers\Admin\AchivmentController::class,'updateAchivment']);
Route::post('/updateAchivmentWithImg',[\App\Http\Controllers\Admin\AchivmentController::class,'updateAchivmentWithImg']);

//Team
Route::get('/adminTeam',[\App\Http\Controllers\Admin\TeamController::class,'team']);
Route::post('/editTeam',[\App\Http\Controllers\Admin\TeamController::class,'editTeam']);
Route::post('/updateTeam',[\App\Http\Controllers\Admin\TeamController::class,'updateTeam']);
Route::post('/updateTeamWithImg',[\App\Http\Controllers\Admin\TeamController::class,'updateTeamWithImg']);
Route::post('/teamDelete',[\App\Http\Controllers\Admin\TeamController::class,'teamDelete']);
Route::post('/addTeam',[\App\Http\Controllers\Admin\TeamController::class,'addTeam']);


//Logo
Route::get('/adminlogo',[\App\Http\Controllers\Admin\LogoController::class,'logo']);
Route::post('/editLogo',[\App\Http\Controllers\Admin\LogoController::class,'editLogo']);

Route::post('/updateLogo',[\App\Http\Controllers\Admin\LogoController::class,'updateLogo']);


Route::get('{AnyRoute}',function(){
    return view('index');
})->where('AnyRoute','.*');

