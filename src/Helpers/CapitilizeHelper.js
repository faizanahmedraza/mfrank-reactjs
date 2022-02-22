import TimeStampHelper from "Helpers/TimeStampHelper";

const BackupNameFormatter = (string) => {
    try {
        let backupString = string,
            backupName,
            backupDate,
            backupTime,
            i,
            under = [];
        for (i = 0; i < backupString.length; i++) {
            if (backupString[i] === "_") {
                under.push(i);
            }
        }
        backupName = backupString.slice(0, under[0]).toUpperCase();
        backupDate = backupString.slice(under[0] + 1, under[1]);
        backupTime = backupString.slice(under[1] + 1, backupString.length);

        return (backupString = `${backupName} ${TimeStampHelper.safariDateTimeFormat(
            `${backupDate} ${backupTime}`
        )}`);
    } catch (error) {
        console.log(error);
    }
};
const capital = (string) => {
    try {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } catch {
        // console.log("Capitalize error");
    }
};
const removeUnderscore = (string) => {
    try {
        const value = string.replaceAll("_", " ");
        return value;
    } catch {
        // console.log("Capitalize error");
    }
};
const emptyCheck = (value, valueUpdate = true) => {
    try {
        let newValue =
            value !== undefined && value !== null ? value : valueUpdate;
        return newValue;
    } catch (error) {
        console.log(error);
    }
};
const Capitilize = {
    capital,
    removeUnderscore,
    BackupNameFormatter,
    emptyCheck,
};

export default Capitilize;
