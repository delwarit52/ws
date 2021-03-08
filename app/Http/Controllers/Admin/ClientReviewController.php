<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\ReviewModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ClientReviewController extends Controller
{
    public function review(){
        $result=ReviewModel::all();
        return $result;
    }

    public function editReview(Request $request){
        $id=$request->id;
        $result=DB::table('review')->where('review_id', $id)->get();
        return $result;
    }
    public function updateReview(Request $request){
        $review_id=$request->input('review_id');
        $name=$request->input('name');
        $title=$request->input('title');
        $detail=$request->input('detail');

        $result=ReviewModel::where('review_id', $review_id)->update([
            'title'=>$title,
            'name'=>$name,
            'detail'=>$detail,
        ]);
        return $result;
    }


    public function updateReviewWithImg(Request $request){
        $review_id=$request->input('review_id');
        $name=$request->input('name');
        $title=$request->input('title');
        $detail=$request->input('detail');

        $image=$request->file('img')->store('public/uploads/review');

        $imgName=explode("/",$image)[3];

        $result=ReviewModel::where('review_id', $review_id)->update([

            'title'=>$title,
            'name'=>$name,
            'detail'=>$detail,
             'image'=>$imgName
        ]);
        return $result;
    }

    public function deleteReview(Request $request){
        $id=$request->id;
        $result=DB::table('review')->where('review_id', $id)->delete();
        return $result;
    }


    public function addReview(Request $request){

        $name=$request->input('name');
        $title=$request->input('title');
        $detail=$request->input('detail');

        $image=$request->file('img')->store('public/uploads/review');

        $imgName=explode("/",$image)[3];


        $result=ReviewModel::insert([
            'title'=>$title,
            'name'=>$name,
            'detail'=>$detail,
            'image'=>$imgName
        ]);
        return $result;
    }



}
