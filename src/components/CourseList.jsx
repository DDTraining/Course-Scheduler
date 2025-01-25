const CourseList = ({ courses }) => (
    <div>
        <ul style={{ textAlign: 'left', listStylePosition: 'inside' }}>
            {Object.keys(courses).map((key) => (
                <ul key={key}>
                    {courses[key].term} {key}: {courses[key].title}
                </ul>
            ))}
        </ul>

    </div>

);

export default CourseList;