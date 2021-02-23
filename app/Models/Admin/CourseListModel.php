<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CourseListModel extends Model
{
    use HasFactory;
    public $table="course_list";
    public $primaryKey="course_list_id";
    public $timestamps=false;
}
