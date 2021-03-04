<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\ServiceModel;
use App\Models\Admin\SliderModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ServiceController extends Controller
{
    public function service(){
        $result=ServiceModel::all();
        return $result;
    }



    public function addService(Request $request){

        $title=$request->input('title');

        $detail=$request->input('detail');

        $image=$request->file('img')->store('public/uploads/service');

        $imgName=explode("/",$image)[3];

        $result=ServiceModel::insert([
            'title'=>$title,
            'detail'=>$detail,
            'img'=>$imgName
        ]);
        return $result;
    }



    public function editService(Request $request){
        $id=$request->id;
        $result=DB::table('service')->where('service_id', $id)->get();
        return $result;
    }


    public function updateService(Request $request){
        $service_id=$request->input('service_id');
        $title=$request->input('title');
        $detail=$request->input('detail');

        $result=ServiceModel::where('service_id', $service_id)->update([
            'title'=>$title,
            'detail'=>$detail,
        ]);
        return $result;
    }


    public function updateServiceWithImg(Request $request){

        $service_id=$request->input('service_id');
        $title=$request->input('title');
        $detail=$request->input('detail');
//        $hiddenImg=$request->file('hiddenImg');

//        unlink('storage/uploads/slider'.$hiddenImg);

        $image=$request->file('img')->store('public/uploads/service');

        $imgName=explode("/",$image)[3];

        $result=ServiceModel::where('service_id', $service_id)->update([
            'title'=>$title,
            'detail'=>$detail,
            'img'=>$imgName
        ]);
        return $result;
    }

    public function deleteService(Request $request){
        $id=$request->id;
        $result=DB::table('service')->where('service_id', $id)->delete();
        return $result;
    }





}
