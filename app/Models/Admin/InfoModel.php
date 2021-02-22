<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InfoModel extends Model
{
    use HasFactory;
        public $table="info";
        public $primaryKey="info_id";
        public $timestamps=false;
}
