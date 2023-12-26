<?php

namespace App\Imports;

use Maatwebsite\Excel\Concerns\WithMultipleSheets;
use App\src\AppHumanResources\Attendance\Application\AttendanceImport;
use App\src\AppHumanResources\Attendance\Application\AttendanceFaultImport;

class FullImport implements WithMultipleSheets
{
    public function sheets(): array
    {
        return [
            'Employees' => new EmployeeImport(),
            'Locations' => new LocationImport(),
            'Shifts' => new ShiftImport(),
            'Schedules' => new ScheduleImport(),
            'Attendances' => new AttendanceImport(),
            'Attendance_Faults' => new AttendanceFaultImport()
        ];
    }
}