<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Admin\ServiceModel;
use DB;


class ServiceController extends Controller
{
      public function service(){
                   $result=ServiceModel::all();
                   return $result;
             }

             public function serviceDetail(Request $request){

                $id =$request->id;

                $result=DB::table('service')->where('service_id', $id)->get();

                return $result;

             }
}
