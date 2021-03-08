<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\CourseListModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CourseController extends Controller
{
    public function course(){
        $result = DB::table('course_list')
            ->join('course_cat', 'course_cat.course_cat_id', '=', 'course_list.course_cat_id')
            ->select('course_list.*', 'course_cat.title')
            ->get();
        return $result;
    }

    public function editCourse(Request $request){
        $id=$request->id;
        $result=CourseListModel::where('course_list_id', $id)->get();
        return $result;
    }



    public function addCourse(Request $request){

        $course_cat_id=$request->input('course_cat_id');
        $title=$request->input('title');
        $duration=$request->input('duration');
        $topic=$request->input('topic');
        $amount=$request->input('amount');
        $detail=$request->input('detail');

        $image=$request->file('img')->store('public/uploads/course');

        $imgName=explode("/",$image)[3];


        $result=CourseListModel::insert([
            'course_title'=>$title,
            'duration'=>$duration,
            'topic'=>$topic,
            'amount'=>$amount,
            'course_cat_id'=>$course_cat_id,
            'detail'=>$detail,
            'image'=>$imgName
        ]);
        return $result;
    }


    public function updateCourse(Request $request){
        $course_list_id=$request->input('course_list_id');
        $course_cat_id=$request->input('course_cat_id');
        $title=$request->input('title');
        $duration=$request->input('duration');
        $topic=$request->input('topic');
        $amount=$request->input('amount');
        $detail=$request->input('detail');



        $result=CourseListModel::where('course_list_id', $course_list_id)->update([
            'course_title'=>$title,
            'duration'=>$duration,
            'topic'=>$topic,
            'amount'=>$amount,
            'course_cat_id'=>$course_cat_id,
            'detail'=>$detail,

        ]);
        return $result;
    }



    public function updateCourseWithImg(Request $request){
        $course_list_id=$request->input('course_list_id');
        $course_cat_id=$request->input('course_cat_id');
        $title=$request->input('title');
        $duration=$request->input('duration');
        $topic=$request->input('topic');
        $amount=$request->input('amount');
        $detail=$request->input('detail');

        $image=$request->file('img')->store('public/uploads/course');

        $imgName=explode("/",$image)[3];


        $result=CourseListModel::where('course_list_id', $course_list_id)->update([
            'course_title'=>$title,
            'duration'=>$duration,
            'topic'=>$topic,
            'amount'=>$amount,
            'course_cat_id'=>$course_cat_id,
            'detail'=>$detail,
            'image'=>$imgName
        ]);
        return $result;
    }


    public function deleteCourse(Request $request){
        $id=$request->id;
        $result=CourseListModel::where('course_list_id', $id)->delete();
        return $result;
    }





}
