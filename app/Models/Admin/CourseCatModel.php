<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CourseCatModel extends Model
{
    use HasFactory;

    public $table="course_cat";
             public $primaryKey="course_cat_id";
             public $timestamps=false;
}
