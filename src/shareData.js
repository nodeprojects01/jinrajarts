 public List<Map<String, Object>> getStudentsByIds(@RequestParam List<Integer> studentIds) {
        List<Object[]> results = studentRepository.findPointsByStudentIds(studentIds);

        List<Map<String, Object>> formattedResults = new ArrayList<>();

        for (Object[] result : results) {
            Integer studentId = (Integer) result[0];
            Integer points = (Integer) result[1];

            // Check if the studentId already exists in the formattedResults list
            boolean found = false;
            for (Map<String, Object> formattedResult : formattedResults) {
                if (formattedResult.get("studentId").equals(studentId)) {
                    ((List<Integer>) formattedResult.get("points")).add(points);
                    found = true;
                    break;
                }
            }

            // If the studentId is not found, create a new entry
            if (!found) {
                Map<String, Object> studentData = new HashMap<>();
                studentData.put("studentId", studentId);
                List<Integer> pointsList = new ArrayList<>();
                pointsList.add(points);
                studentData.put("points", pointsList);
                formattedResults.add(studentData);
            }
        }

        return formattedResults;
    }
