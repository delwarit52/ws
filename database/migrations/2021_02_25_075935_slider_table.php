<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class SliderTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('slider', function (Blueprint $table) {

                               $table->bigIncrements('slider_id');
                                $table->string('title');
                                $table->string('subtitle');
                                $table->string('link');
                                $table->string('detail');
                                $table->text('image');
                                $table->timestamps();

                            });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
          Schema::dropIfExists('slider');
    }
}
