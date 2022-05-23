const logo_linux_default = "./logos/linux.svg"
const win11_download_default = "https://microsoft.com/software-download/windows11"
const win10_download_default = "https://microsoft.com/software-download/windows10"
const ubuntu_download_default = "https://ubuntu.com"
const fedora_download_default = "https://getfedora.org"
const logo_apple_default = "./logos/apple.svg"
const logo_ubuntu_default = "./logos/ubuntu.svg"
const win11_dl_insider = "https://microsoft.com"

const oslist = [
    {
        logo: "https://img.icons8.com/fluency/48/000000/windows-11.png",
        name: "Windows 11",
        type: "Stable",
        build: "21H2",
        codename: "Sun Valley",
        rel: "2021",
        eol: "N/A",
        platform: "x64, ARM",
        download: win11_download_default,
    },
    {
        logo: "https://img.icons8.com/fluency/48/000000/windows-11.png",
        name: "Windows 11",
        type: "Insider Preview (Dev)",
        build: "25120.1",
        codename: "Dev",
        rel: "N/A",
        eol: "N/A",
        platform: "x64, ARM",
        download: win11_dl_insider,
    },
    {
        logo: "https://img.icons8.com/fluency/48/000000/windows-11.png",
        name: "Windows 11",
        type: "Insider Preview (Beta)",
        build: "22621.1",
        codename: "Sun Valley 2",
        rel: "N/A",
        platform: "N/A",
        download: win11_dl_insider,
    },
    {
        logo: "https://img.icons8.com/color/48/000000/windows-10.png",
        name: "Windows 10",
        type: "Stable",
        build: "21H2",
        codename: "N/A",
        rel: "2021",
        eol: "2025",
        platform: "x64, x32, ARM",
        download: win10_download_default,
    },
    {
        logo: "https://img.icons8.com/color/48/000000/windows-10.png",
        name: "Windows 10",
        type: "Stable",
        build: "21H1",
        codename: "Redstone",
        rel: "2015",
        eol: "2025",
        platform: "x64, x32, ARM",
        download: win10_download_default,
    },
    {
        logo: "https://img.icons8.com/color/48/000000/windows8.png",
        name: "Windows RT",
        type: "N/A",
        build: "6.3.9600",
        codename: "RT",
        rel: "October 26th, 2012",
        eol: "January 10th, 2023",
        platform: "ARM",
    },
    {
        logo: "https://img.icons8.com/color/48/000000/windows8.png",
        name: "Windows 8.1",
        type: "Stable",
        build: "NT 6.2",
        codename: "Blue",
        rel: "2013",
        eol: "2023",
        platform: "x64, x32 ARM",
    },
    {
        logo: "https://img.icons8.com/color/48/000000/windows8.png",
        name: "Windows 8",
        type: "Stable",
        build: "NT 6.1",
        codename: "Windows 8",
        rel: "October 2012",
        eol: "2016",
        platform: "x64, x32 ARM",
    },
    {
        logo: "https://www.logo.wine/a/logo/Windows_7/Windows_7-Logo.wine.svg",
        name: "Windows 7",
        type: "Stable",
        build: "NT 6.1",
        codename: "Blackcomb",
        rel: "2009",
        eol: "2020",
        platform: "x64, x32",
    },
    {
        logo: "https://img.icons8.com/color/48/000000/windows-logo.png",
        name: "Windows XP",
        type: "Stable",
        build: "NT 5.1 (x64/IA-64 is 5.2)",
        codename: "Whistler",
        rel: "2001",
        eol: "2014",
        platform: "x64, x32, IA-64",
    },
    {
        logo: logo_ubuntu_default,
        name: "Ubuntu 22.04",
        type: "LTS",
        build: "22.04",
        codename: "Jammy Jellyfish",
        rel: "April 2022",
        eol: "April 2027",
        platform: "x64, x32, arm64",
        download: ubuntu_download_default,
    },
    {
        logo: logo_ubuntu_default,
        name: "Ubuntu 20.04",
        type: "LTS",
        build: "20.04.4",
        codename: "Focal Fossa",
        rel: "April 2020",
        eol: "April 2025",
        platform: "x64, x32, arm64",
        download: ubuntu_download_default,
    },
    {
        logo: logo_ubuntu_default,
        name: "Ubuntu 21.10",
        type: "Interim",
        build: "21.10",
        codename: "Impish Indri",
        rel: "October 2021",
        eol: "July 2022",
        platform: "x64, x32, arm64",
        download: ubuntu_download_default,
    },
    {
        logo: logo_linux_default,
        name: "Fedora 36",
        type: "Stable",
        build: "36.0",
        codename: "N/A",
        rel: "May 2022",
        eol: "May 2023",
        platform: "x32, x64, arm64",
        download: fedora_download_default,
    },
    {
        logo: logo_apple_default,
        name: "WatchOS 8",
        type: "Stable",
        build: "8.6",
        codename: "N/A",
        rel: "September 20, 2021",
        eol: "N/A",
        platform: "N/A",
    },
        {
        logo: logo_apple_default,
        name: "iPadOS/iOS 15",
        type: "Stable",
        build: "15.5",
        codename: "N/A",
        rel: "June 2021",
        eol: "N/A",
        platform: "arm64",
    },
    {
        logo: logo_apple_default,
        name: "MacOS 12",
        type: "Stable",
        build: "12.4",
        codename: "Monterey",
        rel: "October 2021",
        eol: "2024",
        platform: "x64, arm64",
        download: "https://apps.apple.com/us/app/macos-monterey/id1576738294?mt=12",
    },
    {
        logo: logo_apple_default,
        name: "MacOS 11",
        type: "Stable",
        build: "11.6.6",
        codename: "Big Sur",
        rel: "November 2020",
        eol: "2023",
        platform: "x64, arm64",
        download: "https://apps.apple.com/us/app/macos-big-sur/id1526878132?mt=12",
    },
    {
        logo: logo_apple_default,
        name: "MacOS 10.15",
        type: "Stable",
        build: "10.15.7",
        codename: "Catalina",
        rel: "October 2019",
        eol: "November 2022",
        platform: "x64",
        download: "https://apps.apple.com/us/app/macos-catalina/id1466841314?mt=12",
    },
    {
        logo: logo_apple_default,
        name: "MacOS 10.14",
        type: "Stable (Unsupported)",
        build: "10.14.6",
        codename: "Mojave",
        rel: "September 2018",
        eol: "October 2021",
        platform: "x64",
        download: "https://apps.apple.com/us/app/macos-mojave/id1398502828?mt=12",
    },
    {
        logo: logo_apple_default,
        name: "MacOS 10.13",
        type: "Stable (Unsupported)",
        build: "10.13.6",
        codename: "High Sierra",
        rel: "September 2017",
        eol: "December 2020",
        platform: "x64",
        download: "https://apps.apple.com/us/app/macos-high-sierra/id1246284741",
    },
];
export default oslist;
