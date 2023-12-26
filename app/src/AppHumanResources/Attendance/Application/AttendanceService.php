<?php

namespace App\src\AppHumanResources\Attendance\Application;

use App\Imports\FullImport;
use App\src\AppHumanResources\Attendance\Domain\Attendance;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\UploadedFile;
use Maatwebsite\Excel\Facades\Excel;

class AttendanceService
{
    public function uploadExcelAttendance(UploadedFile $file): void
    {
        Excel::import(new FullImport, $file);
    }

    public function getEmployeeAttendance(int $employeeId): array
    {
        $attendanceData = $this->retrieveEmployeeAttendance($employeeId);
        $formattedAttendance = $this->formatAttendanceData($attendanceData);

        return $formattedAttendance;
    }

    private function retrieveEmployeeAttendance($employeeId): Collection
    {
        return Attendance::with('employee')->where('employee_id', $employeeId)->get();
    }

    private function calculateTotalWorkingHours(Model $attendance): int
    {
        $totalWorkingHours = 0;

        $checkinTime = \Carbon\Carbon::parse($attendance->checkin_time);
        $checkoutTime = \Carbon\Carbon::parse($attendance->checkout_time);

        $workingHours = $checkoutTime->diffInHours($checkinTime);

        $totalWorkingHours += $workingHours;

        return $totalWorkingHours;
    }

    private function formatAttendanceData(Collection $attendanceData): array
    {
        $formattedAttendance = [];

        foreach ($attendanceData as $attendance) {
            $formattedAttendance[] = [
                'Name' => $attendance->employee->name,
                'checkin' => $attendance->checkin_time,
                'checkout' => $attendance->checkout_time,
                'total_working_hours' => $this->calculateTotalWorkingHours($attendance),
            ];
        }

        return $formattedAttendance;
    }
}
