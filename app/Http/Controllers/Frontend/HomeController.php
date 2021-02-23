<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Admin\InfoModel;
use App\Models\Admin\AnalyticModel;
use App\Models\Admin\AboutModel;
use App\Models\Admin\ServiceModel;
use App\Models\Admin\CourseCatModel;
use App\Models\Admin\CourseListModel;
use App\Models\Admin\ProjectSummaryModel;
use App\Models\Admin\ProjectModel;
use App\Models\Admin\AchivementModel;
use App\Models\Admin\ReviewModel;

class HomeController extends Controller
{
    public function home_info(){
         $result=InfoModel::all();
                return $result;
    }

      public function home_analytic(){
             $result=AnalyticModel::all();
                    return $result;
        }

          public function home_about(){
                     $result=AboutModel::all();
                            return $result;
                }

     public function home_service(){
               $result=ServiceModel::all();
               return $result;
         }

          public function home_course_cat(){
                        $result=CourseCatModel::all();
                        return $result;
                  }

       public function home_course_list(){
                 $result=CourseListModel::all();
                        return $result;
     }


      public function home_project_summary(){
                      $result=ProjectSummaryModel::all();
                             return $result;
          }

              public function home_project(){
                                $result=ProjectModel::all();
                                       return $result;
                    }



         public function home_achivement(){
                            $result=AchivementModel::all();
                                               return $result;
                            }


             public function home_review(){
                                     $result=ReviewModel::all();
                                                        return $result;
                                     }






}
