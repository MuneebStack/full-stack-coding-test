<?php

namespace App\src\AppHumanResources\Attendance\Application;

use App\Imports\FullImport;
use Illuminate\Http\UploadedFile;
use Maatwebsite\Excel\Facades\Excel;

class AttendanceService
{
    public function uploadExcelAttendance(UploadedFile $file): void
    {
        Excel::import(new FullImport, $file);
    }
}
