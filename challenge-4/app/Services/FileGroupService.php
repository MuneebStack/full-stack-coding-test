<?php

namespace App\Services;

class FileGroupService
{
    public function groupByOwners(array $files): array
    {
        $result = [];

        foreach ($files as $filename => $owner) {
            $result[$owner][] = $filename;
        }

        return $result;
    }
}
