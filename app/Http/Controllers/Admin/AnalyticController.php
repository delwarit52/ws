<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\AnalyticModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AnalyticController extends Controller
{
    public function analytic(){
        $result=AnalyticModel::all();
        return $result;
    }


    public function editAnalytic(Request $request){
        $id=$request->id;
        $result=DB::table('analytic')->where('analytic_id', $id)->get();
        return $result;
    }


    public function updateAnalytic(Request $request){

        $analytic_id=$request->input('analytic_id');
        $title=$request->input('title');
        $total=$request->input('total');

        $result=AnalyticModel::where('analytic_id', $analytic_id)->update([
            'title'=>$title,
            'total'=>$total,
        ]);
        return $result;
    }


    public function updateAnalyticWithImg(Request $request){

        $analytic_id=$request->input('analytic_id');
        $title=$request->input('title');
        $total=$request->input('total');

//        unlink('storage/uploads/slider'.$hiddenImg);

        $image=$request->file('img')->store('public/uploads/analytic');

        $imgName=explode("/",$image)[3];

        $result=AnalyticModel::where('analytic_id',  $analytic_id)->update([
            'title'=>$title,
            'total'=>$total,
            'img'=>$imgName
        ]);
        return $result;
    }
}
