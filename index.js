const Discord = require('discord.js')
const client = new Discord.Client();
const nitroCooldown = new Set();
const ownerCooldown = new Set();

client.on('ready', () => {

    console.log('Readyyy')

})

client.on('message', msg => {

    var prefix = ".";
    var args = msg.content.slice().trim().split(' ');

    const guild = new Discord.Guild();
    const groles = new Discord.GuildMember();

    if(args[0] == `${prefix}ping`) {
        msg.channel.send('Pong!')
    }

    if(args[0] == `${prefix}help`){
		const embed = new Discord.MessageEmbed()
        .setTitle(':hammer: PlateBot Help')
        .setColor('#ffac26')
        .setDescription('*All PlateBot commands list*\n**Current prefix: .**')
        .addField(':gear: Basic', '.ping - Pinging the bot\n.role - Add a ping role to your account', true)
        .addField(':trophy: Fun', '.nitro - Generate nitro code', true)
        .setTimestamp();
        msg.channel.send(embed);
    }

    if(msg.content == 'testaa'){
    	if(msg.author.id == '774157387170316320'){
    		const emoji = client.emojis.cache.get("839740848031924224")
        const emoji1 = client.emojis.cache.get("842977280325582908")
        const emoji2 = client.emojis.cache.get("842976888224874496")
    	const embedInfo = new Discord.MessageEmbed()
    	.setTitle("= PLATEWHEEL DISCORD BASIC INFO =")
    	.setColor('#ffac26')
    	.setDescription("*Welcome to PlateWheel Discord Hopes! This discord server is for people that watch PlateWheel Youtube channel videos! PlateWheel is a content creator that make:*")
    	.addField(':clock1: Speed Code', 'Where he code for pocketmine plugins but with speed up.', true)
        .addField(':hammer: PocketMine Coding Tutorial', 'Where he explain how to coding for pocketmine plugins.', true)
        .addField(':gear: How 2 Make', 'Where he explain how to make specific pocketmine plugins.', true)
    	.addField(':question: FAQs', 'Q: Why this server is created?\nA: This discord server is created is for PlateWheel youtube channel subscribers/viewers need help from their code debugging and connect each other!\n\nQ: Does PlateWheel is making paid commision or needed a job\nA: No, and No.\n\nQ: Can we suggest something for his video idea?\nA: Yes! if you want to suggest something, go to <#840828466328240128> and read the instruction\n\nQ: Can i DM PlateWheel for help or talk privately?\nA: probably no, since we have ticket channel, you can talk privately in the ticket channels.', true)
        .addField(':bust_in_silhouette: PlateWheel Social Media', 'If you want to get touch with plate, here is his social!', false)
        .addField(`${emoji} YouTube`, '[Click Here](https://youtube.com/c/PlateWheel)', true)
        .addField(`${emoji1} Github`, '[Click Here](https://github.com/c/BabosApple)', true)
        .addField(`${emoji2} itch.io`, '[Click Here](https://platewheel.itch.io)', true)
    	.setTimestamp();

    	const embedRole = new Discord.MessageEmbed()
    	.setTitle("= PLATEWHEEL DISCORD ROLE INFO =")
    	.setColor('#ffac26')
    	.setDescription('*Here is our roles list on the server*')
    	.addField(':red_circle: Ownership', 'This role is only belong to PlateWheel itself', false)
    	.addField(':red_square: Administrator', 'This role is only belong to server (Who help platewheel creating, updating, and guard this server)', false)
    	.addField(':purple_circle: Moderator', 'This role is only belong to server moderator (Who help platewheel guard this server)', false)
    	.addField(':yellow_circle: Trusted Staff', 'This role is only belong to someone that PlateWheel & Administrator trust to be a staff here', false)
    	.addField(':blue_circle: Drone', 'This role is only belong to bots in this server', false)
    	.addField(':green_circle: Awarded', 'This role is only belong to giveaway winner in this server', false)
    	.addField(':orange_circle: Members', 'This role is only belong to everyone that participate in this server', false)
    	.setTimestamp();

    	const embedChannel = new Discord.MessageEmbed()
    	.setTitle("= PLATEWHEEL DISCORD CHANNELS INFO =")
    	.setColor('#ffac26')
    	.setDescription('*Here is our categories & channels list on the server')
    	.addField(':pushpin: [SERVER]', '\n<#839698515940999178> » Place where you can read all rules in this server (everyone have to accept the rules)\n\n<#839698531006152755> » Place where you can react to get some ping roles', false)
    	.addField(':wave: [WELCOME]', '\n<#839697937542021120> » Place where you can see list of someone that just joined the server\n\n<#839697957036097556> » Place where you can see someone just leave the server', false)
    	.addField(':loudspeaker: [INFO]', '\n<#839698017439055882> » Place where you can read an announcement that staff announce\n\n<#839702017206517764> » Place where you can see if **PlateWheel** upload a video\n\n<#840202269278339072> » Place where you can vote something to add or not if staff make some poll', false)
    	.addField(':speech_balloon: [GENERAL]', '\n<#839699464326479922> » Place where you can chat with our community\n\n<#839746503193919499> » Place where you can use bot in our server (exept suggestion/aki bot)\n\n<#839699526217367574> » Place where you can make a ticket channel (read the pinned message there for learn more)', false)
    	.addField(':pencil: [SUGGESTIONS]', '\n<#839746727417217034> » Place where you can use suggestion bot (Read pinned message there to learn more)\n\n<#839746760327168020> » Place where you upvote downvote everyone that suggest for PlateWheel video', false)
    	.addField(':computer: [PROGRAMMER]', '\n<#841817434901053450> » Place where you can chat that related to programming\n\n<#841817455571107840> » Place where you can share your project to our community', false)
    	.addField(':tada: [FUN]', '\n<#839703749739544586> » Place where you can participate giveaway that our staff make\n\n<#843481908696055840> » Place where you can participate when there is an ongoing event\n\n<#839702229257945108> » Place where you can play akinator bot (use !aki help there for learn more)', false)
    	.setTimestamp();

    	const embedBoost = new Discord.MessageEmbed()
    	.setTitle("= DO NOT EVER BOOST THIS SERVER! =")
    	.setColor('#ffac26')
    	.setDescription('If you ever think to support me making videos in youtube, do not ever boost this server. You can supporting me just by subcribe my youtube channel, dont waste your money because of me i dont need it.')
    	.setTimestamp();

    	msg.channel.send(embedBoost);
    	}
    }

    if(args[0] == `${prefix}nitro`) {
    	if (nitroCooldown.has(msg.author.id)) {
            msg.channel.send("Wait 30 seconds before using all fun commands. <@" + msg.author.id + ">");
    	} else {
    	msg.channel.send('Nitro code generating').then((msg) => {
    		msg.edit('Starting the service.').then((msg) => {
    			setTimeout(() => {
    				msg.edit('Hacking discord database..').then((msg) => {
    					setTimeout(() => {
    						msg.edit('Collecting some information...').then((msg) => {
    							setTimeout(() => {
    								msg.edit('Generating nitro code....').then((msg) => {
    									setTimeout(() => {
    										msg.edit('Checking discord security.....').then((msg) => {
    											setTimeout(() => {
    												msg.edit(':x: Failed to hack the discord security')
    												setTimeout(() => {
    													msg.channel.send('Dont you think discord made this app like 1 sec and like boom? pfff...')
    													msg.channel.send('https://discord.gift/imagine your the discord developer')
    												}, 2000)
    											}, 1000)
    										})
    									}, 1000)
    								})
    							}, 1000)	
    						})
    					}, 1000)
    				})
    			}, 1000)
    		})
    	})
    	nitroCooldown.add(msg.author.id);
        setTimeout(() => {
            nitroCooldown.delete(msg.author.id)
        }, 30000)
    }
	}

    if (args[0] == `${prefix}role`) {
        if(!args[1]) return msg.reply('Specify the event!\n.role announcement = for announcement ping\n.role poll = for poll ping\n.role upload = for upload ping\n.role giveaway = for giveaway ping\nexample: .role announcement');
        switch(args[1]){
            case "announcement":
                if(msg.member.roles.cache.find(role => role.name === 'Announcement Ping')) {
                    msg.member.roles.remove("839702676089471006")
                    const embed = new Discord.MessageEmbed()
                        .setTitle(":x: Success!")
                        .setColor("#ff0000")
                        .setDescription("Your account have been unset to get pinged in Announcement!")
                        .setFooter("PlateWheel Bot 2021");
                    msg.channel.send(embed);
                } else {
                    msg.member.roles.add("839702676089471006")
                    const embed = new Discord.MessageEmbed()
                        .setTitle(":white_check_mark: Success!")
                        .setColor("#00ff11")
                        .setDescription("Your account have been set to get pinged in Announcement!")
                        .setFooter("PlateWheel Bot 2021");
                    msg.channel.send(embed);
                }
            break;

            case "poll":
                if(msg.member.roles.cache.find(role => role.name === 'Poll Ping')) {
                    msg.member.roles.remove("840784227762176010")
                    const embed = new Discord.MessageEmbed()
                        .setTitle(":x: Success!")
                        .setColor("#ff0000")
                        .setDescription("Your account have been unset to get pinged in Poll!")
                        .setFooter("PlateWheel Bot 2021");
                    msg.channel.send(embed);
                } else {
                    msg.member.roles.add("840784227762176010")
                    const embed = new Discord.MessageEmbed()
                        .setTitle(":white_check_mark: Success!")
                        .setColor("#00ff11")
                        .setDescription("Your account have been set to get pinged in Poll!")
                        .setFooter("PlateWheel Bot 2021");
                    msg.channel.send(embed);
                }
            break;

            case "upload":
                if(msg.member.roles.cache.find(role => role.name === 'Upload Ping')) {
                    msg.member.roles.remove("839702885775179836")
                    const embed = new Discord.MessageEmbed()
                        .setTitle(":x: Success!")
                        .setColor("#ff0000")
                        .setDescription("Your account have been unset to get pinged in Upload!")
                        .setFooter("PlateWheel Bot 2021");
                    msg.channel.send(embed);
                } else {
                    msg.member.roles.add("839702885775179836")
                    const embed = new Discord.MessageEmbed()
                        .setTitle(":white_check_mark: Success!")
                        .setColor("#00ff11")
                        .setDescription("Your account have been set to get pinged in Upload!")
                        .setFooter("PlateWheel Bot 2021");
                    msg.channel.send(embed);
                }
            break;

            case "giveaway":
                if(msg.member.roles.cache.find(role => role.name === 'Giveaway Ping')) {
                    msg.member.roles.remove("839702896656646194")
                    const embed = new Discord.MessageEmbed()
                        .setTitle(":x: Success!")
                        .setColor("#ff0000")
                        .setDescription("Your account have been unset to get pinged in Giveaway!")
                        .setFooter("PlateWheel Bot 2021");
                    msg.channel.send(embed);
                } else {
                    msg.member.roles.add("839702896656646194")
                    const embed = new Discord.MessageEmbed()
                        .setTitle(":white_check_mark: Success!")
                        .setColor("#00ff11")
                        .setDescription("Your account have been set to get pinged in Giveaway!")
                        .setFooter("PlateWheel Bot 2021");
                    msg.channel.send(embed);
                }
            break;

            case "all":
                if(msg.member.roles.cache.find(role => role.name === 'Giveaway Ping') || msg.member.roles.cache.find(role => role.name === 'Upload Ping') || msg.member.roles.cache.find(role => role.name === 'Poll Ping') || msg.member.roles.cache.find(role => role.name === 'Announcement Ping')) {
                    msg.member.roles.remove("839702896656646194")
                    msg.member.roles.remove("839702885775179836")
                    msg.member.roles.remove("840784227762176010")
                    msg.member.roles.remove("839702676089471006")
                    const embed = new Discord.MessageEmbed()
                        .setTitle(":x: Success!")
                        .setColor("#ff0000")
                        .setDescription("Your account have been unset to get pinged in All events!")
                        .setFooter("PlateWheel Bot 2021");
                    msg.channel.send(embed);
                } else {
                    msg.member.roles.add("839702896656646194")
                    msg.member.roles.add("839702885775179836")
                    msg.member.roles.add("840784227762176010")
                    msg.member.roles.add("839702676089471006")
                    const embed = new Discord.MessageEmbed()
                        .setTitle(":white_check_mark: Success!")
                        .setColor("#00ff11")
                        .setDescription("Your account have been set to get pinged in All Events!")
                        .setFooter("PlateWheel Bot 2021");
                    msg.channel.send(embed);
                }

                case "ownership":
                	if(ownerCooldown.has(msg.author.id)){
                		msg.channel.send('You are ownership... right?')
                	} else {
                		const embed = new Discord.MessageEmbed()
                        .setTitle("Adding ownership?")
                        .setDescription("Your account have been set to get... ownership?")
                        .setFooter("ownership?");

                    	msg.channel.send(embed)
                    	ownerCooldown.add(msg.author.id);
                	}
                break;
            break;
        }

    }

    // Admin Commands

    if(args[0] == `${prefix}admrand`){
    	if(msg.author.id == '774157387170316320'){
    		msg.channel.send('RANDOM NUMERS: ' + Math.floor(Math.random() * 4));
    	}
    }

    // event manager
    if(args[0] == `${prefix}evopen`){
    	if(msg.member.roles.cache.find(role => role.name === 'Event Manager')){
    		id = client.channels.cache.get('843481908696055840')
    		roleID = msg.guild.roles.cache.get('844045448557756446')
    		id.overwritePermissions([{id: roleID, allow: ['SEND_MESSAGES']}])
    		msg.channel.send('Done!')
    	}
    }

    if(args[0] == `${prefix}evclose`){
    	if(msg.member.roles.cache.find(role => role.name === 'Event Manager')){
    		id = client.channels.cache.get('843481908696055840')
    		roleID = msg.guild.roles.cache.get('844045448557756446')
    		id.overwritePermissions([{id: roleID, deny: ['SEND_MESSAGES']}])
    		msg.channel.send('Done!')
    	}
    }

    if(args[0] == `${prefix}eveleminate`){
    	if(msg.member.roles.cache.find(role => role.name === 'Event Manager')){
    		roleID = msg.guild.roles.cache.get('844045448557756446')
    		mention = msg.mentions.members.first()
    		mention.roles.remove(roleID)
    		msg.channel.send(`User ${mention} has been eleminate!`)
    	}
    }

    if(args[0] == `${prefix}evadd`){
    	if(msg.member.roles.cache.find(role => role.name === 'Event Manager')){
    		roleID = msg.guild.roles.cache.get('844045448557756446')
    		mention = msg.mentions.members.first()
    		mention.roles.add(roleID)
    		msg.channel.send(`User ${mention} has been added!`)
    	}
    }
    
})

client.login('ODQwODAwMDU4MjI4NDczODY3.YJdeEw.Yy6h2U8LrWKvxyRyWTs8vqLWZpU')