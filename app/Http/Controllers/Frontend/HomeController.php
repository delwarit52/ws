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



}
