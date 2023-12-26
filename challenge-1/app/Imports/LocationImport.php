<?php

namespace App\Imports;

use App\Models\Location;
use Illuminate\Database\Eloquent\Model;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithValidation;

class LocationImport implements ToModel, WithHeadingRow, WithValidation
{
    public function model(array $row): Model|null
    {
        return new Location([
            'id' => $row['id'],
            'name' => $row['name']
        ]);
    }

    public function rules(): array
    {
        return [
            'id' => 'required',
            'name' => 'required'
        ];
    }
}
