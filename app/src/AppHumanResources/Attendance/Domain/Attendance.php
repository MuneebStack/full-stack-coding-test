<?php

namespace App\src\AppHumanResources\Attendance\Domain;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Attendance extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'employee_id',
        'schedule_id',
        'checkin_time',
        'checkout_time'
    ];
}
