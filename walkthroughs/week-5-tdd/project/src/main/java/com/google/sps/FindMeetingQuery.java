// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.sps;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

public final class FindMeetingQuery {

    public Collection < TimeRange > query(Collection < Event > events, MeetingRequest request) {
        List < TimeRange > eventTimeRanges = new ArrayList < > ();
        List < TimeRange > openTimeRanges = new ArrayList < > ();

        if (request.getAttendees() == null || request.getAttendees().isEmpty()) {
            return Arrays.asList(TimeRange.WHOLE_DAY);
        }

        if (request.getDuration() > TimeRange.WHOLE_DAY.duration()) {
            return Arrays.asList();
        }

        for (Event loopEvents: events) {
            eventTimeRanges.add((loopEvents.getWhen()));
        }

        Collections.sort(eventTimeRanges, TimeRange.ORDER_BY_START);

        for (int i = 0; i < eventTimeRanges.size(); i++) {
            if (i == 0) {
                addTimeRangeEndExcluded(
                    openTimeRanges,
                    TimeRange.START_OF_DAY,
                    eventTimeRanges.get(i).start()
                );
                if (eventTimeRanges.size() > 1) {
                    addTimeRangeEndExcluded(
                        openTimeRanges,
                        eventTimeRanges.get(i).end(),
                        eventTimeRanges.get(i + 1).start()
                    );
                } else {
                    addTimeRangeEndIncluded(
                        openTimeRanges,
                        eventTimeRanges.get(i).end(),
                        TimeRange.END_OF_DAY
                    );
                }
            } else if (i == eventTimeRanges.size() - 1) {
                addTimeRangeEndIncluded(
                    openTimeRanges,
                    eventTimeRanges.get(i).end(),
                    TimeRange.END_OF_DAY
                );
            } else {
                addTimeRangeEndExcluded(
                    openTimeRanges,
                    eventTimeRanges.get(i).end(),
                    eventTimeRanges.get(i + 1).start()
                );
            }
        }
        return openTimeRanges;
    }

    private void addTimeRange(List < TimeRange > timeList, int startTime, int endTime, boolean includeEnd) {
        timeList.add((TimeRange.fromStartEnd(
            startTime,
            endTime,
            includeEnd)));
    }

    private void addTimeRangeEndIncluded(List < TimeRange > timeList, int startTime, int endTime) {
        addTimeRange(timeList, startTime, endTime, true);
    }

    private void addTimeRangeEndExcluded(List < TimeRange > timeList, int startTime, int endTime) {
        addTimeRange(timeList, startTime, endTime, false);
    }
}