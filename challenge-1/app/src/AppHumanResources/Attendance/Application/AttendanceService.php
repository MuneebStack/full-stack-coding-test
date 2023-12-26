<?php

namespace App\src\AppHumanResources\Attendance\Application;

use App\Imports\FullImport;
use App\src\AppHumanResources\Attendance\Domain\Attendance;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\UploadedFile;
use Maatwebsite\Excel\Facades\Excel;

class AttendanceService
{
    public function importDataFromExcelFile(UploadedFile $file): void
    {
        Excel::import(new FullImport, $file);
    }

    public function getEmployeeAttendance(int $employeeId): array
    {
        $attendanceData = $this->retrieveEmployeeAttendance($employeeId);
        $formattedAttendance = $this->formatAttendanceData($attendanceData);

        return $formattedAttendance;
    }

    private function retrieveEmployeeAttendance($employeeId): Model
    {
        return Attendance::with('employee')->where('employee_id', $employeeId)->first();
    }

    private function calculateTotalWorkingHours(Model $attendance): ?int
    {
        $checkinTime = $attendance->checkin_time;
        $checkoutTime = $attendance->checkout_time;

        if ($checkinTime !== null && $checkoutTime !== null) {
            $checkinTime = \Carbon\Carbon::parse($checkinTime);
            $checkoutTime = \Carbon\Carbon::parse($checkoutTime);
    
            $workingHours = $checkoutTime->diffInHours($checkinTime);
    
            return $workingHours;
        }
    
        return null;
    }

    private function formatAttendanceData(Model $attendance): array
    {
        $formattedAttendance = [
            'name' => $attendance->employee->name,
            'checkin' => $attendance->checkin_time,
            'checkout' => $attendance->checkout_time,
            'total_working_hours' => $this->calculateTotalWorkingHours($attendance),
        ];

        return $formattedAttendance;
    }
}
