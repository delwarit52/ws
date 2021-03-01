<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\SliderModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class SliderController extends Controller
{
    public function slider(){
        $result=SliderModel::all();
        return $result;
}
    public function deleteSlider(Request $request){
        $id=$request->id;
        $result=DB::table('slider')->where('slider_id', $id)->delete();
        return $result;
    }

    public function addSlider(Request $request){
        $title=$request->input('title');
        $subtitle=$request->input('subtitle');
        $linkData=$request->input('linkData');
        $detail=$request->input('detail');

        $image=$request->file('img')->store('public/uploads/slider');

        $imgName=explode("/",$image)[3];

        $result=SliderModel::insert([
            'title'=>$title,
            'subtitle'=>$subtitle,
            'link'=>$linkData,
            'detail'=>$detail,
            'image'=>$imgName
        ]);
        return $result;
    }
}
