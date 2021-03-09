<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\LogoModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LogoController extends Controller
{
    public function logo(){
        $result=LogoModel::all();
        return $result;
    }
    public function editLogo(Request $request){
        $id=$request->id;
        $result=DB::table('logo')->where('logo_id', $id)->get();
        return $result;
    }


    public function updateLogo(Request $request){

        $logo_id=$request->input('logo_id');
        $position=$request->input('position');


        $image=$request->file('img')->store('public/uploads/logo');

        $imgName=explode("/",$image)[3];

        $result=LogoModel::where('logo_id', $logo_id)->update([
            'position'=>$position,
            'image'=>$imgName
        ]);
        return $result;
    }

}
