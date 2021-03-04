<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\AboutModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AboutController extends Controller
{
    public function adminAbout(){
        $result=AboutModel::all();
        return $result;
    }

    public function editAbout(Request $request){
        $id=$request->id;
        $result=DB::table('about')->where('about_id', $id)->get();
        return $result;
    }

    public function updateAbout(Request $request){
        $about_id=$request->input('about_id');
        $title=$request->input('title');
        $detail=$request->input('detail');

        $result=AboutModel::where('about_id', $about_id)->update([
            'title'=>$title,
            'detail'=>$detail,
        ]);
        return $result;
    }


    public function updateAboutWithImg(Request $request){

        $about_id=$request->input('about_id');
        $title=$request->input('title');
        $detail=$request->input('detail');
//        $hiddenImg=$request->file('hiddenImg');

//        unlink('storage/uploads/slider'.$hiddenImg);

        $image=$request->file('img')->store('public/uploads/about');

        $imgName=explode("/",$image)[3];

        $result=AboutModel::where('about_id', $about_id)->update([
            'title'=>$title,
            'detail'=>$detail,
            'img'=>$imgName
        ]);
        return $result;
    }


}
