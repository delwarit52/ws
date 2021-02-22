<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CourseListTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('course_list', function (Blueprint $table) {
                    $table->bigIncrements('course_list_id');
                    $table->string('title');
                    $table->string('duration');
                    $table->Integer('amount');
                    $table->string('topic');
                    $table->text('detail');
                    $table->text('image');
                    $table->unsignedBigInteger('course_cat_id');
                    $table->foreign('course_cat_id')->references('course_cat_id')->on('course_cat')->onDelete('cascade');;
                });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
