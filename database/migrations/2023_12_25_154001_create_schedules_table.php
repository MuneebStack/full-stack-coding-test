<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('schedules', function (Blueprint $table) {
            $table->unsignedBigInteger('id')->primary('id');
            $table->foreignId('employee_id')->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignId('location_id')->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignId('shift_id')->constrained()->cascadeOnDelete()->cascadeOnUpdate(); 
            $table->date('date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('schedules');
    }
};
