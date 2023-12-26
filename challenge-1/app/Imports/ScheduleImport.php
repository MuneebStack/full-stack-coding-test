<?php

namespace App\Imports;

use App\Models\Schedule;
use Illuminate\Database\Eloquent\Model;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithValidation;

class ScheduleImport implements ToModel, WithHeadingRow, WithValidation
{
    public function model(array $row): Model|null
    {
        return new Schedule([
            'id' => $row['id'],
            'employee_id' => $row['employee_id'],
            'location_id' => $row['location_id'],
            'shift_id' => $row['shift_id'],
            'date' => $row['date']
        ]);
    }

    public function rules(): array
    {
        return [
            'id' => 'required',
            'employee_id' => 'required',
            'location_id' => 'required',
            'shift_id' => 'required',
            'date' => 'required'
        ];
    }
}
