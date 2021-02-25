<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Admin\CourseCatModel;
use App\Models\Admin\CourseListModel;
use DB;

class CourseController extends Controller
{
    public function courseCat(){
                       $result=CourseCatModel::all();
                       return $result;
                 }



                         public function courselist(Request $request){

                                       $id =$request->id;

                                       $result=DB::table('course_list')->where('course_cat_id', $id)->get();

                                       return $result;

                                    }


                 public function courseDetail(Request $request){

                  $id =$request->id;

                  $result=DB::table('course_list')->where('course_list_id', $id)->get();

                   return $result;

             }
}
