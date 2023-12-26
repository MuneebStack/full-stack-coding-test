<?php

namespace App\src\AppHumanResources\Attendance\Domain;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AttendanceFault extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'employee_id',
        'attendance_id',
        'reason'
    ];
}
