<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\CourseCatModel;
use App\Models\Admin\SliderModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CourseCatController extends Controller
{
    public function cat(){
        $result=CourseCatModel::all();
        return $result;
    }


    public function addCourseCat(Request $request){
        $title=$request->input('title');

        $image=$request->file('img')->store('public/uploads/courseCat');

        $imgName=explode("/",$image)[3];

        $result=CourseCatModel::insert([
            'title'=>$title,
            'img'=>$imgName
        ]);
        return $result;
    }




    public function editCourseCat(Request $request){
        $id=$request->id;
        $result=DB::table('course_cat')->where('course_cat_id', $id)->get();
        return $result;
    }

    public function updateCourseCat(Request $request){
        $course_cat_id=$request->input('course_cat_id');
        $title=$request->input('title');

        $result=CourseCatModel::where('course_cat_id', $course_cat_id)->update([
            'title'=>$title,
        ]);
        return $result;
    }

    public function updateCourseCatWithImg(Request $request){

        $course_cat_id=$request->input('course_cat_id');
        $title=$request->input('title');

//        unlink('storage/uploads/slider'.$hiddenImg);

        $image=$request->file('img')->store('public/uploads/courseCat');

        $imgName=explode("/",$image)[3];

        $result=CourseCatModel::where('course_cat_id', $course_cat_id)->update([
            'title'=>$title,
            'img'=>$imgName
        ]);
        return $result;
    }

    public function courseCatDelete(Request $request){
        $id=$request->id;

        $result=CourseCatModel::where('course_cat_id',$id)->delete();
        return $result;
    }

}
