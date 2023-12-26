<?php

namespace App\src\AppHumanResources\Attendance\Application;

use App\src\AppHumanResources\Attendance\Domain\AttendanceFault;
use Illuminate\Database\Eloquent\Model;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithValidation;

class AttendanceFaultImport implements ToModel, WithHeadingRow, WithValidation
{
    public function model(array $row): Model|null
    {
        return new AttendanceFault([
            'id' => $row['id'],
            'employee_id' => $row['employee_id'],
            'attendance_id' => $row['attendance_id'],
            'reason' => $row['reason']
        ]);
    }

    public function rules(): array
    {
        return [
            'id' => 'required',
            'employee_id' => 'required',
            'attendance_id' => 'required',
            'reason' => 'required'
        ];
    }
}
