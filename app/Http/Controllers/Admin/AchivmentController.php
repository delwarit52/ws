<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\AchivementModel;
use Illuminate\Http\Request;

class AchivmentController extends Controller
{
    public function achivment(){
        $result=AchivementModel::all();
        return $result;
    }

    public function updateAchivment(Request $request){
        $achivment_id=$request->input('achivment_id');
        $title=$request->input('title');
        $detail=$request->input('detail');


        $result=AchivementModel::where('achivement_id', $achivment_id)->update([
            'title'=>$title,
            'detail'=>$detail,
        ]);
        return $result;
    }



    public function updateAchivmentWithImg(Request $request){
        $achivment_id=$request->input('achivment_id');
        $title=$request->input('title');
        $detail=$request->input('detail');

        $image=$request->file('img')->store('public/uploads/video');

        $imgName=explode("/",$image)[3];


        $result=AchivementModel::where('achivement_id', $achivment_id)->update([
            'title'=>$title,
            'detail'=>$detail,
            'video'=>$imgName
        ]);
        return $result;
    }


}
