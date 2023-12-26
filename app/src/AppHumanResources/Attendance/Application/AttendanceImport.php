<?php

namespace App\src\AppHumanResources\Attendance\Application;

use App\src\AppHumanResources\Attendance\Domain\Attendance;
use Illuminate\Database\Eloquent\Model;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithValidation;

class AttendanceImport implements ToModel, WithHeadingRow, WithValidation
{
    public function model(array $row): Model|null
    {
        return new Attendance([
            'id' => $row['id'],
            'employee_id' => $row['employee_id'],
            'schedule_id' => $row['schedule_id'],
            'checkin_time' => $row['checkin_time'],
            'checkout_time' => $row['checkout_time']
        ]);
    }

    public function rules(): array
    {
        return [
            'id' => 'required',
            'employee_id' => 'required',
            'schedule_id' => 'required'
        ];
    }
}
