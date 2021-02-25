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
}
