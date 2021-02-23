<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AchivementModel extends Model
{
    use HasFactory;
     public $table="achivement";
            public $primaryKey="achivement_id";
            public $timestamps=false;
}
