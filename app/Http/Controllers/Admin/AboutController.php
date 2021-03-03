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

}
